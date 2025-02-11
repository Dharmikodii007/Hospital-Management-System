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

    localStorage.setItem("token", response.data.token);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getAdmin = async () => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await api.get("/admin", { headers });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const addDoctorData = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.post("/doctor", formData, { headers });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const AllDoctorData = async () => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.get("/doctor", { headers });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const dltDoctorData = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.delete(`/doctor/${id}`, { headers });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default api;
