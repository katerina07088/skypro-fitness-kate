import { createContext, useState, ReactNode, useEffect } from "react";
import { getUserFromLocalStorage, removeUserFromLocalStorage, saveUserToLocalStorage } from "../lib/helpers";
import { User } from "firebase/auth";

type UserProviderProps = {
  children: ReactNode;
};

type UserContextData = {
  user: User | null;
  logout: () => void;
  setUser: (newUser: User) => void;
};

// Создаем контекст
export const UserContext = createContext<UserContextData | null>(null);

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(getUserFromLocalStorage);

  useEffect(() => {
    if (user) {
      saveUserToLocalStorage(user);
    }
  });

  const logout = () => {
        setUser(null);
        removeUserFromLocalStorage();
      };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// const UserProvider = ({ children }: UserProviderProps) => {
//   // Получаем пользователя из localStorage
//   const getUserFromLocalStorage = (): UserType | null => {
//     const userInfo = localStorage.getItem("user");
//     return userInfo ? JSON.parse(userInfo) : null;
//   };

//   // Состояние для хранения пользователя
//   const [userData, setUserData] = useState<UserType | null>(
//     getUserFromLocalStorage()
//   );

//   // Функция для выхода
//   const logout = () => {
//     setUserData(null);
//     localStorage.removeItem("user");
//   };

//   // Функция для установки нового пользователя
//   const setUser = (newUser: UserType) => {
//     setUserData(newUser);
//     localStorage.setItem("user", JSON.stringify(newUser));
//   };

//   return (
//     <UserContext.Provider value={{ userData, logout, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
  
// };
// export default UserProvider;
