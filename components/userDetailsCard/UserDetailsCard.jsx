import React, { useState } from "react";
import "./UserDetailsCard.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../IconButton/IconButton";
import UserCreateCard from "../UserCreateCard/UserCreateCard";
import UserCard from "../UserCard/UserCard";

function UserDetailsCard({}) {
  const [create, setCreate] = useState(false);
  const handelCreate = () => {
    setCreate(true);
  };

  const handleClose = () => {
    setCreate(!create);
  };

  return (
    <div
      className="userDetailsCardContainer"
      style={{
        alignItems: create && "center",
        justifyContent: create && "center",
      }}
    >
      {!create && (
        <>
          <div className="userDetailsCardTopContainer">
            <div className="userDetailsCardTopHeadding">
              <h1>User</h1>
            </div>
            <div className="userDetailsCardCreateButtonContainer">
              <div className="userDetailsCardCreateButtonContainer">
                <IconButton
                  width={140}
                  height={50}
                  buttonText="create"
                  onClick={handelCreate}
                  icon={faCirclePlus}
                />
              </div>
            </div>
          </div>
          <div className="userDetailsCardDetailsHeaddingContainer">
            <p>serial.No</p>
            <p>Username</p>
            <p>Farm Name</p>
            <p>Location</p>
            <input type="text" />
          </div>
          <div className="userDetailsCardDetailsContainer">
            <UserCard />
          </div>
        </>
      )}
      {create && <UserCreateCard handleCloseButton={handleClose} />}
    </div>
  );
}

export default UserDetailsCard;
