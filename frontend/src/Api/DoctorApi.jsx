import { apiRequest } from "../utils/ApiUtils/apiUtils";

// ✅ Doctor APIs

/** Add a new doctor */
export const addDoctorData = (data) => apiRequest("post", "/doctor", data);

/** Fetch all doctors */
export const AllDoctorData = () => apiRequest("get", "/doctor");

/** Delete a doctor by ID */
export const dltDoctorData = (id) => apiRequest("delete", `/doctor/${id}`);

/** Update doctor details by ID */
export const updateDoctorData = (id, data) =>
  apiRequest("put", `/doctor/${id}`, data);

/** Fetch doctor details by ID */
export const getDoctorDataById = (id) => apiRequest("get", `/doctor/${id}`);
