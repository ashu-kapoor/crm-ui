import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { opportunitiesActions } from "../actions/opportunities.actions";
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
    byId: merge(currentById, payload.Opportunities.byId),
    allIds: uniq([...state.allIds, ...payload.Opportunities.allIds]),
    isFetching: false,
    isError: false,
  };
};

export const opportunitiesReducer = handleActions(
  {
    [commonActions.api.entities.clear.request]: reducerClear,
    [opportunitiesActions.api.opportunities.get.request]: reducerRequest,
    [opportunitiesActions.api.opportunities.get.receive]: reducerReceive,
    [opportunitiesActions.api.opportunities.get.error]: reducerError,
    [opportunitiesActions.api.opportunities.put.request]: reducerRequest,
    [opportunitiesActions.api.opportunities.put.receive]: reducerReceive,
    [opportunitiesActions.api.opportunities.put.error]: reducerError,
    [opportunitiesActions.api.opportunities.post.request]: reducerRequest,
    [opportunitiesActions.api.opportunities.post.receive]: reducerReceive,
    [opportunitiesActions.api.opportunities.post.error]: reducerError,
    [opportunitiesActions.api.opportunities.delete.request]: reducerRequest,
    [opportunitiesActions.api.opportunities.delete.receive]: reducerReceive,
    [opportunitiesActions.api.opportunities.delete.error]: reducerError,
  },
  defaultStateShape
);
