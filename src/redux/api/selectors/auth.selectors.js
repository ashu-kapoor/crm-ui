import { get } from "lodash";
import { createSelector } from "reselect";

export const getAuthSlice = (state) => get(state, "Auth", null);

export const isAuthFetching = createSelector([getAuthSlice], (slice) =>
  slice ? slice.isFetching : false
);

export const isAuthError = createSelector([getAuthSlice], (slice) =>
  slice ? slice.isError : false
);

export const getErrorMessage = (state) => {
  const error = get(getAuthSlice(state), "error", {});
  if (error && error.results) {
    return error.results.errors[0].details;
  }
  return "Unexpected Error Occured";
};

export const isAuthorized = createSelector([getAuthSlice], (slice) =>
  slice ? slice.isAuthorized && slice.token : false
);
