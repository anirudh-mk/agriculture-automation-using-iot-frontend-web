// appFunctions.js
import { loginUser } from "./ApiFunctions";

export const handleLogin = async (
  username,
  password,
  setLogin,
  setLoginError
) => {
  try {
    const accessToken = await loginUser(username, password);
    localStorage.setItem("accessToken", accessToken);
    setLogin(true);
  } catch (error) {
    setLoginError(true);
  }
};

export const handleLogout = (setLogin) => {
  localStorage.removeItem("accessToken");
  setLogin(false);
};

export const handleUsername = (text, setUsername) => {
  setUsername(text.target.value);
};

export const handlePassword = (text, setPassword) => {
  setPassword(text.target.value);
};
