// App.js
import React from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import DashboardScreen from "../screens/DashborardScree/DashboardScreen";
import { useAppState } from "./stateManagement";
import {
  handleLogin,
  handleLogout,
  handleUsername,
  handlePassword,
} from "./appFunctions";

function App() {
  const {
    login,
    setLogin,
    username,
    setUsername,
    password,
    setPassword,
    loginError,
    setLoginError,
  } = useAppState();

  return (
    <>
      {login ? (
        <DashboardScreen handleLogout={() => handleLogout(setLogin)} />
      ) : (
        <LoginScreen
          handleLogin={() =>
            handleLogin(username, password, setLogin, setLoginError)
          }
          handleUsername={(text) => handleUsername(text, setUsername)}
          handlePassword={(text) => handlePassword(text, setPassword)}
          isLoginError={loginError}
        />
      )}
    </>
  );
}

export default App;
