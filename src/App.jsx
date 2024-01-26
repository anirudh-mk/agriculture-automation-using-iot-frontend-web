import React, { useEffect, useState } from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import DashboardScreen from "../screens/DashborardScree/DashboardScreen";
import axios from "axios";

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/v1/user/login/", {
        email: username,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.response.accessToken);
        setLogin(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setLogin(false);
  };

  const handleUsername = (text) => {
    setUsername(text.target.value);
  };
  const handlePassword = (text) => {
    setPassword(text.target.value);
  };

  return (
    <>
      {login ? (
        <DashboardScreen handleLogout={handleLogout} />
      ) : (
        <LoginScreen
          handleLogin={handleLogin}
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          isLoginError={loginError}
        />
      )}
    </>
  );
}

export default App;
