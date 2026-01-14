import axios from "axios";
import { env } from "../env";

const API_URL = env.API_URL;

export const register = async ({
  first_name,
  last_name,
  email,
  password,
  confirm_password,
}) => {
  try {
    const payload = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };

    const res = await axios.post(`${API_URL}/api/auth/signup`, payload);

    return {
      success: true,
      message: res.data.message,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      };
    }

    return {
      success: false,
      message: "Network error",
    };
  }
};
