import React, { useEffect, useState } from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import DashboardScreen from "../screens/DashborardScree/DashboardScreen";
import axios from "axios";

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    axios
      .get("https://dev.mulearn.org/api/v1/register/community/list/")
      .then(function (response) {
        // handle success
        console.log(response.data.response.communities);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });

  const handleLogin = () => {
    if (username === "anirudh" && password === "1234") {
      setLogin(true);
    } else {
      setLoginError(true);
    }
  };
  const handleLogout = () => {
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
