import { createSelector } from "reselect";
import { get } from "lodash";

export const getUsersSlice = (state) => get(state, "Data.Users", null);

//get all UserId's from store
export const getUsersAllIds = createSelector([getUsersSlice], (slice) =>
  get(slice, "allIds", [])
);

//get byId
export const getUsersById = (state) => get(state, "Data.Users.byId", {});

//get pagination
export const getUsersPagination = createSelector([getUsersSlice], (slice) =>
  get(slice, "Paging", {})
);

//getAllUsers : array of objects with key as ID
export const getAllUsers = createSelector(
  [getUsersAllIds, getUsersById],
  (ids, usersById) => {
    const users = {};

    if (ids && usersById) {
      ids.forEach((id) => {
        users[id] = usersById[id];
      });
    }

    return users;
  }
);

//ids prop will be array
const idsList = (state, { id, ids }) => ids || (id ? [id] : []);

//get Users by Ids
export const getUsersByIds = createSelector(
  [idsList, getUsersById],
  (ids, usersById) =>
    ids && usersById
      ? ids.map((id) => ({
          id: usersById[id],
        }))
      : []
);

export const isUsersFetching = createSelector([getUsersSlice], (slice) =>
  slice ? slice.isFetching : null
);

export const isUsersError = createSelector([getUsersSlice], (slice) =>
  slice ? slice.isError : null
);

//getAllUsers : array of objects with key as ID
export const getUsersByPagination = createSelector(
  [getUsersAllIds, getUsersById, getUsersPagination],
  (ids, usersById, paging) => {
    const users = {};
    if (ids && usersById && paging) {
      try {
        const initialIndex = paging.currentPageKey * paging.pageSize;
        let indexEnd = initialIndex + paging.pageSize - 1;
        indexEnd = indexEnd >= paging.count ? paging.count - 1 : indexEnd;
        const idSlice = ids.slice(initialIndex, indexEnd + 1);
        idSlice.forEach((id) => {
          users[id] = usersById[id];
        });
      } catch (e) {}
    }

    return users;
  }
);

export const hasNextPage = createSelector([getUsersPagination], (slice) =>
  slice.nextPageKey == null ? false : true
);

export const hasPreviousPage = createSelector([getUsersPagination], (slice) =>
  slice.previousPageKey == null ? false : true
);
