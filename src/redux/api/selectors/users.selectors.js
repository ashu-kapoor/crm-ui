import { createSelector } from "reselect";
import { get } from "lodash";

export const getUsersSlice = (state) => get(state, "Data.Users", null);

//get all UserId's from store
export const getUsersAllIds = (state) => get(state, "Data.Users.allIds", []);

//get byId
export const getUsersById = (state) => get(state, "Data.Users.byId", {});

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
  slice ? slice.isUsersFetching : null
);

export const isUsersError = createSelector([getUsersSlice], (slice) =>
  slice ? slice.isError : null
);
