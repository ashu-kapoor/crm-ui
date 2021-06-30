import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { usersActions } from "../actions/users.actions";
import { commonActions } from "../actions/common.actions";
import {
  defaultStateShape,
  reducerClear,
  reducerError,
  reducerRequest,
} from "./common";

const reducerReceive = (state = {}, action) => {
  const {
    payload,
    meta,
    meta: { meta: metaData },
  } = action;
  const currentById = cloneDeep(state.byId);
  return {
    byId: merge(currentById, payload.Users.byId),
    allIds: uniq([...state.allIds, ...payload.Users.allIds]),
    isFetching: false,
    isError: false,
  };
};

export const usersReducer = handleActions(
  {
    [commonActions.api.entities.clear.request]: reducerClear,
    [usersActions.api.users.get.request]: reducerRequest,
    [usersActions.api.users.get.receive]: reducerReceive,
    [usersActions.api.users.get.error]: reducerError,
    [usersActions.api.users.put.request]: reducerRequest,
    [usersActions.api.users.put.receive]: reducerReceive,
    [usersActions.api.users.put.error]: reducerError,
    [usersActions.api.users.post.request]: reducerRequest,
    [usersActions.api.users.post.receive]: reducerReceive,
    [usersActions.api.users.post.error]: reducerError,
    [usersActions.api.users.delete.request]: reducerRequest,
    [usersActions.api.users.delete.receive]: reducerReceive,
    [usersActions.api.users.delete.error]: reducerError,
  },
  defaultStateShape
);
