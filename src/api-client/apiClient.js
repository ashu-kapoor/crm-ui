import axios from "axios";

let settings = {};
export const resetSettings = () => {
  settings = {};
};

export const injectAuthHeader = (token) => {
  if (token) {
    settings.Authorization = token;
  } else {
    throw new Error("Token missing");
  }
};

const requestInterceptor = (config) => {
  return { ...config, headers: { Authorization: settings.Authorization } };
};

const getAxiosClient = () => {
  const axiosOptions = {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Content-Type": "application/json",
    },
  };
  const http = axios.create(axiosOptions);
  http.interceptors.request.use(
    (config) => requestInterceptor(config),
    (error) => Promise.reject(error)
  );
  return http;
};

const handleError = (error) => {
  if (error.response) {
    throw error.response.data;
  } else if (error.request) {
    throw error.request;
  } else {
    throw error;
  }
};

const facade = (http) => ({
  get: (url, appConfig = {}) => http.get(url, appConfig).catch(handleError),
  delete: (url, appConfig = {}) =>
    http.delete(url, appConfig).catch(handleError),
  post: (url, payload, appConfig = {}) =>
    http.post(url, payload, appConfig).catch(handleError),
  put: (url, payload, appConfig = {}) =>
    http.put(url, payload, appConfig).catch(handleError),
});

export const apiClient = facade(getAxiosClient());

export const replaceParametersInPath = (pathString, parameters) => {
  const params = parameters || {};
  return pathString.replace(
    /{\s*([^}]*)\s*}/g,
    (match, $1) => params[$1.trim()]
  );
};

export const buildApiEndpoint = (
  baseUrl,
  basePath,
  resorcePath,
  pathParams = null
) => {
  const url = `${baseUrl}${basePath}${resorcePath}`;
  return replaceParametersInPath(url, pathParams);
};
