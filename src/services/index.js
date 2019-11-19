import axios from "axios";
import { configureAxios as axiosConfig } from "./setupAxios";
import { API_URL } from "../constants";

export const showError = (
  errorMsg = "Something went bad. Please try again later."
) => {
  window.alert(errorMsg);
};

export const getData = (url, headers) => {
  const apiUrl = `${API_URL.BASE_URL}${url}`;
  return axios.get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers
    }
  });
};

export const postData = (url, { body, headers }) => {
  const apiUrl = `${API_URL.BASE_URL}${url}`;
  return axios.post(apiUrl, body, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers
    }
  });
};

export const getAllVideos = async () => {
  const apiUrl = `${API_URL.VIDEOS}`;
  return getData(apiUrl);
};

export const getVideoById = async id => {
  const apiUrl = `${API_URL.VIDEOS}/${id}`;
  return getData(apiUrl);
};

export const postVideo = body => {
  const apiUrl = `${API_URL.VIDEOS}`;
  return postData(apiUrl, { body });
};

export const configureAxios = axiosConfig;
