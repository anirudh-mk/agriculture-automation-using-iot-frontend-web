import React from "react";
import "./UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function UserCard() {
  return (
    <div className="userCardContainer">
      <div className="SerialNoContainer">
        <p>1</p>
      </div>
      <div className="UserNameContainer">
        <p>Anirudh</p>
      </div>
      <div className="FarmNameContainer">
        <p>farm1</p>
      </div>
      <div className="LocationContainer">
        <p>Kerala</p>
      </div>
      <div className="ImageContainer">
        <img src="" alt="" className="userCardUserImage" />
      </div>
      <div className="OptionContainer">
        <FontAwesomeIcon
          className="MenuIcon"
          icon={faEllipsisVertical}
          size="lg"
        />
      </div>
    </div>
  );
}

export default UserCard;
