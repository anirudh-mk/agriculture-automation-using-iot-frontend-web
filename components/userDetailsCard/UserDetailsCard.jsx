import React from "react";
import "./UserDetailsCard.css";

import IconButton from "../IconButton/IconButton";

function UserDetailsCard() {
  return (
    <div className="userDetailsCardContainer">
      <div className="userDetailsCardTopContainer">
        <div className="userDetailsCardTopHeadding">
          <h1>User</h1>
        </div>
        <div className="userDetailsCardCreateButtonContainer">
          <IconButton width={"8vw"} buttonText="create" />
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCard;
