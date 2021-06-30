import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { contactsActions } from "../actions/contacts.actions";
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
    byId: merge(currentById, payload.Contacts.byId),
    allIds: uniq([...state.allIds, ...payload.Contacts.allIds]),
    isFetching: false,
    isError: false,
  };
};

export const contactsReducer = handleActions(
  {
    [commonActions.api.entities.clear.request]: reducerClear,
    [contactsActions.api.contacts.get.request]: reducerRequest,
    [contactsActions.api.contacts.get.receive]: reducerReceive,
    [contactsActions.api.contacts.get.error]: reducerError,
    [contactsActions.api.contacts.put.request]: reducerRequest,
    [contactsActions.api.contacts.put.receive]: reducerReceive,
    [contactsActions.api.contacts.put.error]: reducerError,
    [contactsActions.api.contacts.post.request]: reducerRequest,
    [contactsActions.api.contacts.post.receive]: reducerReceive,
    [contactsActions.api.contacts.post.error]: reducerError,
    [contactsActions.api.contacts.delete.request]: reducerRequest,
    [contactsActions.api.contacts.delete.receive]: reducerReceive,
    [contactsActions.api.contacts.delete.error]: reducerError,
  },
  defaultStateShape
);
