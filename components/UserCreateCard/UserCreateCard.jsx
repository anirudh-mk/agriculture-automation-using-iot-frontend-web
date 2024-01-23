import React, { useCallback, useState } from "react";
import "./UserCreateCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import TextButton from "..//TextButton/TextButton";
import { text } from "@fortawesome/fontawesome-svg-core";
function UserCreateCard({ handleCloseButton }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("0000");
  const [confirmPassword, setConfirmPassword] = useState("0000");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [machineCode, setMachineCode] = useState("");
  const [address, setAddress] = useState("");

  const handleFirstName = (text) => {
    setFirstName(text.target.value);
  };
  const handleLastName = (text) => {
    setLastName(text.target.value);
  };
  const handleEmail = (text) => {
    setEmail(text.target.value);
  };
  const handleUsername = (text) => {
    setUsername(text.target.value);
  };

  const handlePassword = (text) => {
    setPassword(text.target.value);
  };
  const handleConfirmPassword = (text) => {
    setConfirmPassword(text.target.value);
  };
  const handlePhone = (text) => {
    setPhone(text.target.value);
  };
  const handleLocation = (text) => {
    setLocation(text.target.value);
  };
  const handleMachineCode = (text) => {
    setMachineCode(text.target.value);
  };
  const handleAddress = (text) => {
    setAddress(text.target.value);
  };
  return (
    <div className="userCreateCardContainer">
      <div className="userCreateCardTopContainer">
        <div className="userCreateCardHeaddingContainer">
          <h1>Create User</h1>
        </div>
        <div className="userCreateCardCloseButtonIconContainer">
          <FontAwesomeIcon
            className="userCreateCardCloseIcon"
            icon={faXmark}
            size="xl"
            onClick={handleCloseButton}
          />
        </div>
      </div>
      <div className="userCreateCardInputsContianer">
        <div className="userCreateCardInputsRowContainer">
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">First Name</p>
            <input
              type="text"
              className="userCreateCardInput"
              onChange={handleFirstName}
            />
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Last Name</p>
            <input
              type="text"
              className="userCreateCardInput"
              onChange={handleLastName}
            />
          </div>
        </div>
        <div className="userCreateCardInputsRowContainer">
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Email</p>
            <input
              type="email"
              className="userCreateCardInput"
              onChange={handleEmail}
            />
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Username</p>
            <input
              type="text"
              className="userCreateCardInput"
              onChange={handleUsername}
            />
          </div>
        </div>
        <div className="userCreateCardInputsRowContainer">
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Password</p>
            <input
              type="password"
              className="userCreateCardInput"
              onChange={handlePassword}
            />
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Confirm Password</p>
            <input
              type="password"
              className="userCreateCardInput"
              onChange={handleConfirmPassword}
            />
          </div>
        </div>
        <div className="userCreateCardInputsRowContainer">
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Phone</p>
            <input
              type="phone"
              className="userCreateCardInput"
              onChange={handlePhone}
            />
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Location</p>
            <input
              type="password"
              className="userCreateCardInput"
              onChange={handleLocation}
            />
          </div>
        </div>
        <div className="userCreateCardInputsRowContainer">
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Machine Code</p>
            <input
              type="password"
              className="userCreateCardInput"
              onChange={handleMachineCode}
            />
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Address</p>
            <input
              type="password"
              className="userCreateCardInput"
              onChange={handleAddress}
            />
          </div>
        </div>
      </div>
      <div className="userCreateCardBottomButtonContainer">
        <div className="userCreateCardCloseButtonContainer">
          <TextButton
            buttonText="close"
            width={120}
            height={40}
            backgroundColor="gray"
            onClick={handleCloseButton}
          />
        </div>
        <TextButton buttonText="submit" width={120} height={40} />
      </div>
    </div>
  );
}

export default UserCreateCard;
