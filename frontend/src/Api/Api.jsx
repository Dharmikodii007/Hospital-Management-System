import axios from "axios";

// Create an Axios instance with base configuration
const api = axios.create({
  baseURL: "http://localhost:4000/api", // Replace with your backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAdmin = async (formData) => {
  try {
    const response = await api.post("/admin", formData);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const addDoctorData = async (formData) => {
  try {
    const response = await api.post("/doctor", formData);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default api;
