import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { productsActions } from "../actions/products.actions";
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
    byId: merge(currentById, payload.Products.byId),
    allIds: uniq([...state.allIds, ...payload.Products.allIds]),
    isFetching: false,
    isError: false,
  };
};

export const productsReducer = handleActions(
  {
    [commonActions.api.entities.clear.request]: reducerClear,
    [productsActions.api.products.get.request]: reducerRequest,
    [productsActions.api.products.get.receive]: reducerReceive,
    [productsActions.api.products.get.error]: reducerError,
    [productsActions.api.products.put.request]: reducerRequest,
    [productsActions.api.products.put.receive]: reducerReceive,
    [productsActions.api.products.put.error]: reducerError,
    [productsActions.api.products.post.request]: reducerRequest,
    [productsActions.api.products.post.receive]: reducerReceive,
    [productsActions.api.products.post.error]: reducerError,
    [productsActions.api.products.delete.request]: reducerRequest,
    [productsActions.api.products.delete.receive]: reducerReceive,
    [productsActions.api.products.delete.error]: reducerError,
  },
  defaultStateShape
);
