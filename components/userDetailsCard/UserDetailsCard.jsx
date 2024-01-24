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
            <div className="headdingContainer">
              <h1>User</h1>
            </div>
            <div className="CreateButtonContainer">
              <IconButton
                width={140}
                height={50}
                buttonText="create"
                onClick={handelCreate}
                icon={faCirclePlus}
              />
            </div>
          </div>
          <div className="userDetailsCardDetailsContainer">
            <div className="headdingContainer">
              <div className="serialNoContianer">
                <p>Serial No</p>
              </div>
              <div className="userNameContainer">
                <p>User Name</p>
              </div>
              <div className="farmNameContainer">
                <p>Farm Name</p>
              </div>
              <div className="locationContainer">
                <p>Location</p>
              </div>
              <div className="searchBarContainer">
                <input type="text" />
              </div>
            </div>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </>
      )}
      {create && <UserCreateCard handleCloseButton={handleClose} />}
    </div>
  );
}

export default UserDetailsCard;
