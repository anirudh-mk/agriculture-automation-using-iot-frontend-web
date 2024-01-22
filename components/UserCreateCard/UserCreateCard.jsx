import React from "react";
import "./UserCreateCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import TextButton from "..//TextButton/TextButton";
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
        <p className="userCreateCardInputHeadding">First Name</p>
        <input type="text" className="userCreateCardInput" />
        <p className="userCreateCardInputHeadding">Last Name</p>
        <input type="text" className="userCreateCardInput" />
        <p className="userCreateCardInputHeadding">Username</p>
        <input type="text" className="userCreateCardInput" />
        <p className="userCreateCardInputHeadding">Email</p>
        <input type="text" className="userCreateCardInput" />
        <p className="userCreateCardInputHeadding">Password</p>
        <input type="text" className="userCreateCardInput" />
        <p className="userCreateCardInputHeadding">Confirm Password</p>
        <input type="text" className="userCreateCardInput" />
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
