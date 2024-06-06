import { createSelector } from "reselect";
import { get, isNil } from "lodash";

export const getOpportunitiesSlice = (state) =>
  get(state, "Data.Opportunities", null);

//get all UserId's from store
export const getOpportunitiesAllIds = createSelector(
  [getOpportunitiesSlice],
  (slice) => get(slice, "allIds", [])
);

//get byId
export const getOpportunitiesById = (state) =>
  get(state, "Data.Opportunities.byId", {});

//get pagination
export const getOpportunitiesPagination = createSelector(
  [getOpportunitiesSlice],
  (slice) => get(slice, "Paging", {})
);

//getAllOpportunities : array of objects with key as ID
export const getAllOpportunities = createSelector(
  [getOpportunitiesAllIds, getOpportunitiesById],
  (ids, OpportunitiesById) => {
    const Opportunities = {};

    if (ids && OpportunitiesById) {
      ids.forEach((id) => {
        Opportunities[id] = OpportunitiesById[id];
      });
    }

    return Opportunities;
  }
);

//ids prop will be array
const idsList = (state, { id, ids }) => {
  const data = id ? [id] : ids;
  return data;
};

//get Opportunities by Ids
export const getOpportunitiesByIds = createSelector(
  [idsList, getOpportunitiesById],
  (ids, OpportunitiesById) =>
    ids && OpportunitiesById
      ? ids.map((id) => ({
          [id]: OpportunitiesById[id],
        }))
      : []
);

export const isOpportunitiesFetching = createSelector(
  [getOpportunitiesSlice],
  (slice) => (slice ? slice.isFetching : null)
);

export const isOpportunitiesError = createSelector(
  [getOpportunitiesSlice],
  (slice) => (slice ? slice.isError : null)
);

//getAllOpportunities : array of objects with key as ID
export const getOpportunitiesByPagination = createSelector(
  [getOpportunitiesAllIds, getOpportunitiesById, getOpportunitiesPagination],
  (ids, OpportunitiesById, paging) => {
    const Opportunities = {};
    if (ids && OpportunitiesById && paging) {
      try {
        const initialIndex = paging.currentPageKey * paging.pageSize;
        let indexEnd = initialIndex + paging.pageSize - 1;
        indexEnd = indexEnd >= paging.count ? paging.count - 1 : indexEnd;
        const idSlice = ids.slice(initialIndex, indexEnd + 1);
        idSlice.forEach((id) => {
          Opportunities[id] = OpportunitiesById[id];
        });
      } catch (e) {}
    }

    return Opportunities;
  }
);

export const hasNextPage = createSelector(
  [getOpportunitiesPagination],
  (slice) => (slice.nextPageKey == null ? false : true)
);

export const hasPreviousPage = createSelector(
  [getOpportunitiesPagination],
  (slice) => (slice.previousPageKey == null ? false : true)
);

export const getPageKeys = (state) => {
  return {
    nextPageKey: get(getOpportunitiesSlice(state), "Paging.nextPageKey", null),
    previousPageKey: get(
      getOpportunitiesSlice(state),
      "Paging.previousPageKey",
      null
    ),
    count: get(getOpportunitiesSlice(state), "Paging.count", null),
  };
};
