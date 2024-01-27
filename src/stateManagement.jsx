// stateManagement.js
import { useState } from "react";

export const useAppState = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  return {
    login,
    setLogin,
    username,
    setUsername,
    password,
    setPassword,
    loginError,
    setLoginError,
  };
};
