import React from "react";
import "./UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function UserCard() {
  return (
    <div className="userCardContainer">
      <p>1</p>
      <p>Anirudh</p>
      <p>farm1</p>
      <p>Kerala</p>
      <img src="" alt="" className="userCardUserImage" />
      <FontAwesomeIcon
        className="userCardContainerMenuIcon"
        icon={faEllipsisVertical}
        size="lg"
      />
    </div>
  );
}

export default UserCard;
