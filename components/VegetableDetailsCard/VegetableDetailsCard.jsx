import React, { useState } from "react";
import "./VegetableDetailsCard.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../IconButton/IconButton";
import UserCreateCard from "../UserCreateCard/UserCreateCard";
function VegetableDetailsCard() {
  const [create, setCreate] = useState(false);
  const handelCreate = () => {
    setCreate(true);
  };

  const handleClose = () => {
    setCreate(!create);
  };

  return (
    <div
      className="VegetableDetailsCardContainer"
      style={{
        alignItems: create && "center",
        justifyContent: create && "center",
      }}
    >
      {!create && (
        <div className="VegetableDetailsCardTopContainer">
          <div className="VegetableDetailsCardTopHeadding">
            <h1>Vegetables</h1>
          </div>
          <div className="VegetableDetailsCardCreateButtonContainer">
            <div className="VegetableDetailsCardCreateButtonContainer">
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
      )}
      {create && <UserCreateCard handleCloseButton={handleClose} />}
    </div>
  );
}

export default VegetableDetailsCard;
