import { createSelector } from "reselect";
import { get } from "lodash";

export const getProductsSlice = (state) => get(state, "Data.Products", null);

//get all UserId's from store
export const getProductsAllIds = (state) =>
  get(state, "Data.Products.allIds", []);

//get byId
export const getProductsById = (state) => get(state, "Data.Products.byId", {});

//getAllUsers : array of objects with key as ID
export const getAllProducts = createSelector(
  [getProductsAllIds, getProductsById],
  (ids, productsById) => {
    const products = {};

    if (ids && productsById) {
      ids.forEach((id) => {
        products[id] = productsById[id];
      });
    }

    return products;
  }
);

//ids prop will be array
const idsList = (state, { id, ids }) => ids || (id ? [id] : []);

//get Users by Ids
export const getProductsByIds = createSelector(
  [idsList, getProductsById],
  (ids, productsById) =>
    ids && productsById
      ? ids.map((id) => ({
          id: productsById[id],
        }))
      : []
);

export const isProductsFetching = createSelector([getProductsSlice], (slice) =>
  slice ? slice.isUsersFetching : null
);

export const isProductsError = createSelector([getProductsSlice], (slice) =>
  slice ? slice.isError : null
);
