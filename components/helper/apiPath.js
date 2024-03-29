
// apiConfig.js
const BASE_URL = "http://170.64.144.128:5000/api";

export const API_ENDPOINTS = {
  ALL_SERVICES: "/get/allservicesname",
  GET_SERVICE_BY_ID: "/get/services",
  GET_CONTACTS_DETAILS: "/get-all-contacts",
  GET_ALL_REVIEWS: "/get/allratting",
  GET_ALL_SECIAL_DATA: "/get/all/social/media",
  GET_ABOUT_DATA: "/get/allabout",
  GET_HOME_DATA: "/get/allDashboard",
  GET_FAQ_DATA: "/get/allFaq",
  GET_PODCAST_DATA: "/get/allprodcast",
  GET_RESOURCES_DATA: "/get/allresource",
  GET_FOUNDER_DATA: "/get/allblog",
  ADD_CONTACT: "/sendEmail"
};

export const getAPIEndpoint = (endpoint) => {
  return BASE_URL + endpoint;
};

export const IMAGE_BASE_URL = "http://170.64.144.128:5000/get/image"
export const getImageSource = (urlPath) => `${IMAGE_BASE_URL}?urlPath=/${urlPath?.replace(/\\/g, '/')}`;
