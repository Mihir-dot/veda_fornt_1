
// apiConfig.js
const BASE_URL = "http://170.64.144.128:5000/api";

export const API_ENDPOINTS = {
  ALL_SERVICES: "/get/allservicesname",
  GET_SERVICE_BY_ID:"/get/services",
  GET_CONTACTS_DETAILS:"/get-all-contacts"
};

export const getAPIEndpoint = (endpoint) => {
  return BASE_URL + endpoint;
};

export const IMAGE_BASE_URL = "http://170.64.144.128:5000/api"
