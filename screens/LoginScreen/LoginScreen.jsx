import React, { useState } from "react";
import "./LoginScreen.css";

import TextButton from "../../components/TextButton/TextButton";

function LoginScreen() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleUserName = (text) => {
    setUserName(text.target.value);
  };

  const handlePassword = (text) => {
    console.log("hello");
  };

  const handleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <div className="loginScreenContainer">
      <div className="loginScreenInputContainer">
        {forgotPassword ? (
          <div>
            forgot password <p onClick={handleForgotPassword}>d</p>
          </div>
        ) : (
          <>
            <div className="loginScreenInputContainerHeaddingContainer">
              <h1>hello</h1>
            </div>
            <div className="loginScreenInputDataContainer">
              <p className="loginScreenInputLabels">Username</p>
              <input
                className="userNameInput"
                type="text"
                onChange={handleUserName}
              />
              <p className="loginScreenInputLabels">Password</p>
              <input
                className="password"
                type="password"
                onChange={handlePassword}
              />
              <p
                className="loginScreenForgotPassword"
                onClick={handleForgotPassword}
              >
                ForgotPassword?
              </p>
              <div className="loginScreenLoginButtonContainer">
                <TextButton
                  width={300}
                  height={50}
                  buttonText="Login"
                  onClick={handleLogin}
                ></TextButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
