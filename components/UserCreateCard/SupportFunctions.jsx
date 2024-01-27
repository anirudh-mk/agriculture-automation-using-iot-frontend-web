import { registerUser } from "./ApiFunctions";

export const handleUserRegistration = (
  firstName,
  lastName,
  setFirstNamePresent,
  email,
  setInvalidEmail,
  username,
  setUsernamePresent,
  phone,
  setPhonePresent
) => {
  if (firstName === "") {
    setFirstNamePresent(true);
  } else {
    setFirstNamePresent(false);
  }
  if (email.includes("@") && email.includes(".com")) {
    setInvalidEmail(false);
  } else {
    setInvalidEmail(true);
  }
  if (email === "") {
    setEmailPresent(true);
  } else {
    setEmailPresent(false);
  }
  if (username == "") {
    setUsernamePresent(true);
  } else {
    setUsernamePresent(false);
  }
  if (phone === "") {
    setPhonePresent(true);
  } else {
    setPhonePresent(false);
  }
  const userData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    username: username,
  };

  registerUser(userData)
    .then(function (response) {
      console.log("====================================");
      console.log(response);
      console.log("====================================");
    })
    .catch(function (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    })
    .finally(function () {});
};

export const handleFirstName = (text, setFirstName) => {
  setFirstName(text.target.value);
};

export const handleLastName = (text, setLastName) => {
  setLastName(text.target.value);
};

export const handleEmail = (text, setEmail) => {
  setEmail(text.target.value);
};

export const handleUsername = (text, setUsername) => {
  setUsername(text.target.value);
};

export const handlePassword = (text, setPassword) => {
  setPassword(text.target.value);
};

export const handleConfirmPassword = (text, setConfirmPassword) => {
  setConfirmPassword(text.target.value);
};

export const handlePhone = (text, setPhone) => {
  setPhone(text.target.value);
};

export const handleLocation = (text, setLocation) => {
  setLocation(text.target.value);
};

export const handleMachineCode = (text, setMachineCode) => {
  setMachineCode(text.target.value);
};
export const handleAddress = (text, setAddress) => {
  setAddress(text.target.value);
};
