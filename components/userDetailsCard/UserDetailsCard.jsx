import React, { useEffect, useState } from "react";
import "./UserDetailsCard.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import IconButton from "../IconButton/IconButton";
import UserCreateCard from "../UserCreateCard/UserCreateCard";
import UserCard from "../UserCard/UserCard";

function UserDetailsCard({}) {
  // state variables
  const [create, setCreate] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/user/list/"
        );
        setData(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);
  // functions
  const handelCreate = () => {
    setCreate(true);
  };

  const handleClose = () => {
    setCreate(!create);
  };
  console.log(data);
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
            {data.map((item, index) => (
              <UserCard
                key={item.id}
                serialNo={index + 1}
                username={item.username}
              />
            ))}
          </div>
        </>
      )}
      {create && <UserCreateCard handleCloseButton={handleClose} />}
    </div>
  );
}

export default UserDetailsCard;
