import axios from "axios";
import { showError } from ".";
import { isEmpty } from "../utilities/validation";

export const configureAxios = setLoading => {
  // Add a request interceptor
  axios.interceptors.request.use(
    function(config) {
      setLoading(true);
      return config;
    },
    function(error) {
      setLoading(false);
      showError();
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      setLoading(false);
      return response;
    },
    function(error) {
      setLoading(false);
      console.log("in error sectin", isEmpty(error.response));
      if (isEmpty(error.response) || error.response.status !== 404) {
        showError();
      }
      return Promise.reject(error);
    }
  );
};
