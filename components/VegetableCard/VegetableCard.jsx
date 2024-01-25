import React from "react";
import "./VegetableCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function VegetableCard() {
  return (
    <div className="vegetableCardContainer">
      <div className="SerialNoContainer">
        <p>1</p>
      </div>
      <div className="vegetableNameContainer">
        <p>Tomato</p>
      </div>
      <div className="NContainer">
        <p>10</p>
      </div>
      <div className="PContainer">
        <p>56</p>
      </div>
      <div className="KContainer">
        <p>26</p>
      </div>
      <div className="timeRequiredContainer">
        <p>25 days</p>
      </div>
      <div className="ImageContainer">
        <img src="" alt="" className="vegetableImage" />
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

export default VegetableCard;
