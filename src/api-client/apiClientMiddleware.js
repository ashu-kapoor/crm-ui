import { injectAuthHeader } from "./apiClient";
import { trim } from "lodash";

export const apiClientMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const {
    Auth: { isAuthorized = false, token = null },
  } = store.getState();
  if (isAuthorized && token) {
    const tokendata = `BEARER ${trim(token)}`;
    injectAuthHeader(tokendata);
  }
  if (next) {
    next(action);
  }
};
