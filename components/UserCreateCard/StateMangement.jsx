import { useState } from "react";

export const userCreateCardState = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("0000");
  const [confirmPassword, setConfirmPassword] = useState("0000");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [machineCode, setMachineCode] = useState("");
  const [address, setAddress] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [firstNamePresent, setFirstNamePresent] = useState(false);
  const [emailPresent, setEmailPresent] = useState(false);
  const [phonePresent, setPhonePresent] = useState(false);
  const [usernamePresent, setUsernamePresent] = useState(false);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    phone,
    setPhone,
    location,
    setLocation,
    machineCode,
    setMachineCode,
    address,
    setAddress,
    invalidEmail,
    setInvalidEmail,
    invalidPhone,
    setInvalidPhone,
    firstNamePresent,
    setFirstNamePresent,
    emailPresent,
    setEmailPresent,
    phonePresent,
    setPhonePresent,
    usernamePresent,
    setUsernamePresent,
  };
};
