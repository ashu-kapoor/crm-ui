import { handleActions } from "redux-actions";
import { cloneDeep, merge, uniq } from "lodash";
import { productsActions } from "../actions/products.actions";
import { commonActions } from "../actions/common.actions";
import {
  defaultStateShape,
  reducerClear,
  reducerError,
  reducerRequest,
  nextPageReducer,
  previousPageReducer,
  firstPageReducer,
  lastPageReducer,
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

  const allIds = uniq([...state.allIds, ...payload.Products.allIds]);
  paging.count = allIds.length;

  //Products only called on initial load or from contacts so pagination updated to 0
  paging.nextPageKey = paging.count > constants.PAGE_SIZE ? 1 : null;
  paging.previousPageKey = null;
  paging.currentPageKey = 0;

  return {
    byId: merge(currentById, payload.Products.byId),
    allIds: allIds,
    isFetching: false,
    isError: false,
    Paging: paging,
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

    [productsActions.api.products.pagination.first]: firstPageReducer,
    [productsActions.api.products.pagination.last]: lastPageReducer,
    [productsActions.api.products.pagination.previous]: previousPageReducer,
    [productsActions.api.products.pagination.next]: nextPageReducer,
  },
  defaultStateShape
);
