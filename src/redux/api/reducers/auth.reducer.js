import { handleActions } from "redux-actions";
import { authActions } from "../actions/auth.actions";
import { commonActions } from "../actions/common.actions";
import {
  defaultAuthShape,
  reducerClear,
  reducerError,
  reducerRequest,
} from "./common";

const reducerReceive = (state = {}, action) => {
  const { payload } = action;

  return {
    isAuthorized: true,
    token: payload.auth.token,
    userId: payload.userId,
    isFetching: false,
    isError: false,
  };
};

export const authReducer = handleActions(
  {
    [commonActions.api.entities.clear.request]: reducerClear,

    [authActions.api.auth.post.request]: reducerRequest,
    [authActions.api.auth.post.receive]: reducerReceive,
    [authActions.api.auth.post.error]: reducerError,
  },
  defaultAuthShape
);
