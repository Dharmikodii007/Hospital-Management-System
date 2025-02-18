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

export const AllDepartmentData = async () => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.get("/department", { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const AddDepartment = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.post(`/department`, formData, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const dltDepartment = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.delete(`/department/${id}`, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const updateDepartment = async (id, formData) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.put(`/department/${id}`, formData, {
      headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getDepartmentById = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.get(`/department/${id}`, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default api;
