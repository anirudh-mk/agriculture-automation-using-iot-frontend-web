import React from "react";
import "./UserCreateCard.css";
import TextButton from "..//TextButton/TextButton";
function UserCreateCard({ handleCloseButton }) {
  return (
    <div className="userCreateCardContainer">
      <div className="userCreateCardTopContainer">
        <div className="userCreateCardHeaddingContainer">
          <h1>Create User</h1>
        </div>
        <div className="userCreateCardCloseButtonContainer">
          <TextButton width={20} height={20} onClick={handleCloseButton} />
        </div>
      </div>
    </div>
  );
}

export default UserCreateCard;
