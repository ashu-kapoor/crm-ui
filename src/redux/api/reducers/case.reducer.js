import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { casesActions } from "../actions/cases.actions";
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
    byId: merge(currentById, payload.Cases.byId),
    allIds: uniq([...state.allIds, ...payload.Cases.allIds]),
    isFetching: false,
    isError: false,
  };
};

export const casesReducer = handleActions(
  {
    [commonActions.api.entities.clear.request]: reducerClear,
    [casesActions.api.cases.get.request]: reducerRequest,
    [casesActions.api.cases.get.receive]: reducerReceive,
    [casesActions.api.cases.get.error]: reducerError,
    [casesActions.api.cases.put.request]: reducerRequest,
    [casesActions.api.cases.put.receive]: reducerReceive,
    [casesActions.api.cases.put.error]: reducerError,
    [casesActions.api.cases.post.request]: reducerRequest,
    [casesActions.api.cases.post.receive]: reducerReceive,
    [casesActions.api.cases.post.error]: reducerError,
    [casesActions.api.cases.delete.request]: reducerRequest,
    [casesActions.api.cases.delete.receive]: reducerReceive,
    [casesActions.api.cases.delete.error]: reducerError,
  },
  defaultStateShape
);
