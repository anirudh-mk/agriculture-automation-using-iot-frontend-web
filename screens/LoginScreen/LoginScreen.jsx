import React from "react";
import "./LoginScreen.css";
import TextButton from "../../components/TextButton/TextButton";
function LoginScreen() {
  return (
    <div className="loginScreenContainer">
      <div className="loginScreenCardContianer">
        <div className="loginScreenImageContainer">
          <img src="" alt="" />
        </div>
        <div className="loginScreenLoginContainer">
          <div className="loginScreenContentContainer">
            <h1 className="loginScreenHeadding">Welcome Back!</h1>
            <p className="loginScreenDescription">Login to continue</p>
            <input className="loginScreenInputs" type="text" />
            <input className="loginScreenInputs" type="password" />
            <div className="loginScreenButtonContainer">
              <TextButton width={"45%"} height={50} buttonText="Login" />
              <div className="loginScreenForgotPasswordContainer">
                <p className="loginScreenForgotPassword">Forgot password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
