// Типы данных пользователя
import { UserType } from "../types/user";

// Типы аргументов и ответа функции
type LoginCredentials = {
  login: string;
  password: string;
};

export const loginUser = async (credentials: LoginCredentials): Promise<UserType> => {
  try {
    const response = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
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
