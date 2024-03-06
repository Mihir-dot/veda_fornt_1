
import axios from "axios";
import { getAPIEndpoint, API_ENDPOINTS } from "./apiPath";

export const fetchServiceName = async () => {
  try {
    const response = await axios.get(getAPIEndpoint(API_ENDPOINTS.ALL_SERVICES));
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};