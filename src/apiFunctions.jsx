// apiFunctions.js
import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/user/login/",
      {
        email: username,
        password: password,
      }
    );
    return response.data.response.accessToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
