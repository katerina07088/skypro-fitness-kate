// Типы данных пользователя
import { RegType, UserType } from "../types/user";
import { app, auth } from "../lib/firebaseConfig"
import { 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signInWithEmailAndPassword, 
    updatePassword } 
  from "firebase/auth";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { FirebaseError } from "firebase/app";

// Типы аргументов и ответа функции
type LoginCredentials = {
  login: string;
  password: string;
};

const database = getDatabase(app);

// Зарегестрироваться
export async function regUser({
  email,
  password,
}: RegType) {
  try {
    // Создаем пользователя с email и паролем
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const uid = userCredential.user.uid;

    // Обновляем профиль пользователя, чтобы установить displayName
    // await updateProfile(userCredential.user, {
    //   displayName: username,
    // });

    // Сохраняем информацию о пользователе в Realtime Database  
    await set(ref(database, "users/" + uid), {
      uid: uid,
      email: email,
    });

    // Получаем информацию о пользователе из базы данных
    const snapshot = await get(child(ref(database), `users/${uid}`));
    return snapshot.val();
    
  } catch (error) {
    // Проверяем, является ли error экземпляром FirebaseError и имеет код ошибки
    if (error instanceof FirebaseError && error.code === "auth/email-already-in-use") {
      throw new Error("Данная почта уже используется");
    } else {
      throw new Error("Произошла ошибка при регистрации. Попробуйте снова.");
    }
  }
}

export const loginUser = async (credentials: LoginCredentials): Promise<UserType> => {
  try {
    // Аутентифицируем пользователя через Firebase
    const userCredential = await signInWithEmailAndPassword(auth, credentials.login, credentials.password);
    const uid = userCredential.user.uid;

    const response = await fetch(`https://fitness-cee19-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },      
    });

    if (!response.ok) {
      throw new Error("Неверные данные для входа");
    }

    const userData: UserType = await response.json();
    return userData;
  } catch (error) {
    console.error("Ошибка при входе:", error);
    throw error;
  }
};

export async function handlePasswordReset(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log(`Ссылка для восстановления пароля отправлена на ${email}`);
  } catch (error) {
    console.error("Ошибка при отправке письма для сброса пароля:", error);
  }
}

// Сменить пароль
export async function changePassword(password: string) {
  try {
    if (!auth.currentUser) {
      throw new Error("Нет авторизации");
    }
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
