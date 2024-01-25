import React, { useState } from "react";
import "./VegetableDetailsCard.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";
import UserCreateCard from "../UserCreateCard/UserCreateCard";
import VegetableCard from "../VegetableCard/VegetableCard";

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
      className="vegetableDetailsCardContainer"
      style={{
        alignItems: create && "center",
        justifyContent: create && "center",
      }}
    >
      {!create && (
        <>
          <div className="topContainer">
            <div className="topHeadding">
              <h1>Vegetables</h1>
            </div>
            <div className="createButtonContainer">
              <IconButton
                width={140}
                height={50}
                buttonText="create"
                onClick={handelCreate}
                icon={faCirclePlus}
              />
            </div>
          </div>
          <div className="detailsContainer">
            <div className="headdingContainer">
              <div className="serialNoContianer">
                <p>Serial No</p>
              </div>
              <div className="vegetableNameContainer">
                <p>Name</p>
              </div>
              <div className="NContainer">
                <p>N</p>
              </div>
              <div className="PContainer">
                <p>P</p>
              </div>
              <div className="KContainer">
                <p>K</p>
              </div>
              <div className="timeRequiredContainer">
                <p>Time Required</p>
              </div>
              <div className="searchBarContainer">
                <input type="text" />
              </div>
            </div>
            <VegetableCard />
          </div>
        </>
      )}
      {create && <UserCreateCard handleCloseButton={handleClose} />}
    </div>
  );
}

export default VegetableDetailsCard;
