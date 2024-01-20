import React, { useState } from "react";
import "./UserDetailsCard.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../IconButton/IconButton";

function UserDetailsCard({}) {
  const [create, setCreate] = useState(false);
  const handelCreate = () => {
    setCreate(true);
  };

  const handleClose = () => {
    setCreate(false);
  };

  return (
    <div className="userDetailsCardContainer">
      <div className="userDetailsCardTopContainer">
        <div className="userDetailsCardTopHeadding">
          <h1>User</h1>
        </div>
        <div className="userDetailsCardCreateButtonContainer">
          <IconButton
            width={110}
            height={40}
            buttonText="create"
            onClick={handelCreate}
            icon={faCirclePlus}
          />
        </div>
      </div>
      {create && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "#f99",
              borderRadius: 10,
            }}
          >
            <div
              style={{ width: 20, height: 20, backgroundColor: "#fff" }}
              onClick={handleClose}
            >
              x
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetailsCard;
