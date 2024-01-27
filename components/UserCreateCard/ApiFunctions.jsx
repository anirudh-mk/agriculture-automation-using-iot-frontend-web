import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/user/register/",
      userData
    );
    return response.data; // Assuming the response contains data you want to handle
  } catch (error) {
    console.error(error);
    throw error;
  }
};
