import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { usersActions } from "../actions/users.actions";
import { commonActions } from "../actions/common.actions";
import {
  defaultStateShape,
  reducerClear,
  reducerError,
  reducerRequest,
  firstPageReducer,
  lastPageReducer,
  previousPageReducer,
  nextPageReducer,
} from "./common";
import constants from "../../constants";

const reducerReceive = (state = {}, action) => {
  const {
    payload,
    meta,
    meta: { meta: metaData },
  } = action;
  const currentById = cloneDeep(state.byId);
  const paging = { ...state.Paging };

  const allIds = uniq([...state.allIds, ...payload.Users.allIds]);
  paging.count = allIds.length;

  //Users only called on initial load or from contacts so pagination updated to 0
  paging.nextPageKey = paging.count > constants.PAGE_SIZE ? 1 : null;
  paging.previousPageKey = null;
  paging.currentPageKey = 0;

  return {
    byId: merge(currentById, payload.Users.byId),
    allIds: allIds,
    isFetching: false,
    isError: false,
    Paging: paging,
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

    [usersActions.api.users.pagination.first]: firstPageReducer,
    [usersActions.api.users.pagination.last]: lastPageReducer,
    [usersActions.api.users.pagination.previous]: previousPageReducer,
    [usersActions.api.users.pagination.next]: nextPageReducer,
  },
  defaultStateShape
);
