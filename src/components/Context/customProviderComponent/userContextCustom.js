// Нині значення контексту не динамічне. Користувач може зареєструватися і розлогінітися, зберігатимемо це в стані компонента. Крім цього необхідні методи його зміни. Створимо кастомний компонент провайдера <UserProvider> в якому закриємо логіку роботи зі станом.

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};