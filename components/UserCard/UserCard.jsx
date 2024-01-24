import React from "react";
import "./UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function UserCard() {
  return (
    <div className="userCardContainer">
      <div className="userCardContainerSerialNoContainer">
        <p>1</p>
      </div>
      <div className="userCardContainerUserNameContainer">
        <p>Anirudh</p>
      </div>
      <div className="userCardContainerFarmNameContainer">
        <p>farm1</p>
      </div>
      <div className="userCardContainerLocationContainer">
        <p>Kerala</p>
      </div>
      <div className="userCardContainerImageContainer">
        <img src="" alt="" className="userCardUserImage" />
      </div>
      <div className="userCardContainerOptionContainer">
        <FontAwesomeIcon
          className="userCardContainerMenuIcon"
          icon={faEllipsisVertical}
          size="lg"
        />
      </div>
    </div>
  );
}

export default UserCard;
