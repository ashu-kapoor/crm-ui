import { createSelector } from "reselect";
import { get } from "lodash";

export const getProductsSlice = (state) => get(state, "Data.Products", null);

//get all UserId's from store
export const getProductsAllIds = createSelector([getProductsSlice], (slice) =>
  get(slice, "allIds", [])
);

//get byId
export const getProductsById = (state) => get(state, "Data.Products.byId", {});

//get pagination
export const getProductsPagination = createSelector(
  [getProductsSlice],
  (slice) => get(slice, "Paging", {})
);

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
  slice ? slice.isFetching : null
);

export const isProductsError = createSelector([getProductsSlice], (slice) =>
  slice ? slice.isError : null
);

//getAllUsers : array of objects with key as ID
export const getProductsByPagination = createSelector(
  [getProductsAllIds, getProductsById, getProductsPagination],
  (ids, productsById, paging) => {
    const products = {};
    if (ids && productsById && paging) {
      try {
        const initialIndex = paging.currentPageKey * paging.pageSize;
        let indexEnd = initialIndex + paging.pageSize - 1;
        indexEnd = indexEnd >= paging.count ? paging.count - 1 : indexEnd;
        const idSlice = ids.slice(initialIndex, indexEnd + 1);
        idSlice.forEach((id) => {
          products[id] = productsById[id];
        });
      } catch (e) {}
    }

    return products;
  }
);

export const hasNextPage = createSelector([getProductsPagination], (slice) =>
  slice.nextPageKey == null ? false : true
);

export const hasPreviousPage = createSelector(
  [getProductsPagination],
  (slice) => (slice.previousPageKey == null ? false : true)
);
