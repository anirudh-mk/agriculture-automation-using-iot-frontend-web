import React from "react";
import "./LoginScreen.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import TextButton from "../../components/TextButton/TextButton";

function LoginScreen() {
  return (
    <div className="loginScreenContainer">
      <div className="loginScreenInputContainer">
        <div className="loginScreenInputContainerHeaddingContainer">
          <h1>hello</h1>
        </div>
        <div className="loginScreenInputDataContainer">
          <p className="loginScreenInputLabels">Username</p>
          <input className="userNameInput" type="text" />
          <p className="loginScreenInputLabels">Password</p>
          <input className="password" type="password" />
          <p className="loginScreenForgotPassword">ForgotPassword?</p>
          <div className="loginScreenLoginButtonContainer">
            <TextButton width={300} height={50} buttonText="Login"></TextButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
