import React, { useCallback, useState } from "react";
import "./UserCreateCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TextButton from "..//TextButton/TextButton";
import axios from "axios";
function UserCreateCard({ handleCloseButton }) {
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
            {firstNamePresent && <p className="error">required field</p>}
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
            {!emailPresent ? (
              invalidEmail && <p className="error">invalid email</p>
            ) : (
              <p className="error">email required</p>
            )}
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Username</p>
            <input
              type="text"
              className="userCreateCardInput"
              onChange={handleUsername}
            />
            {usernamePresent && <p className="error">required field</p>}
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
            {!phonePresent ? (
              invalidPhone && <p className="error">Invalid Phone</p>
            ) : (
              <p className="error">Phone Required</p>
            )}
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Location</p>
            <input
              type="text"
              className="userCreateCardInput"
              onChange={handleLocation}
            />
          </div>
        </div>
        <div className="userCreateCardInputsRowContainer">
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Machine Code</p>
            <input
              type="text"
              className="userCreateCardInput"
              onChange={handleMachineCode}
            />
          </div>
          <div className="userCreateCardInputsColumnContainer">
            <p className="userCreateCardInputHeadding">Address</p>
            <input
              type="text"
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
        <TextButton
          buttonText="submit"
          width={120}
          height={40}
          onClick={handleUserRegistration}
        />
      </div>
    </div>
  );
}

export default UserCreateCard;
