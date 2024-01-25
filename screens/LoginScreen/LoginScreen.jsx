import React from "react";
import "./LoginScreen.css";
import TextButton from "../../components/TextButton/TextButton";
import LoginScreenImage from "../../assets/loginScreenImage.png";
function LoginScreen({
  handleLogin,
  handleUsername,
  handlePassword,
  isLoginError,
}) {
  return (
    <div className="loginScreenContainer">
      <div className="loginScreenCardContianer">
        <div className="loginScreenImageContainer">
          <img src={LoginScreenImage} />
        </div>
        <div className="loginScreenLoginContainer">
          <div className="loginScreenContentContainer">
            <h1 className="loginScreenHeadding">Welcome Back!</h1>
            <p className="loginScreenDescription">Login to continue</p>
            <p>Username</p>
            <input
              className="loginScreenInputs"
              type="text"
              onChange={handleUsername}
            />
            <p>Password</p>
            <input
              className="loginScreenInputs"
              type="password"
              onChange={handlePassword}
            />
            {isLoginError && (
              <p className="error">invalid username or password</p>
            )}
            <div className="loginScreenButtonContainer">
              <TextButton
                width={"45%"}
                height={38}
                buttonText="Login"
                onClick={handleLogin}
              />
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
