import React from "react";
import "./LoginScreen.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../../components/IconButton/IconButton";

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
            <IconButton
              height={50}
              backgroundColor="#076DFC"
              borderRadius={10}
              buttonText="User"
              icon={faUsers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
