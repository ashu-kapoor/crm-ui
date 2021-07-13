import { createSelector } from "reselect";
import { get, isNil } from "lodash";

export const getContactsSlice = (state) => get(state, "Data.Contacts", null);

//get all UserId's from store
export const getContactsAllIds = createSelector([getContactsSlice], (slice) =>
  get(slice, "allIds", [])
);

//get byId
export const getContactsById = (state) => get(state, "Data.Contacts.byId", {});

//get pagination
export const getContactsPagination = createSelector(
  [getContactsSlice],
  (slice) => get(slice, "Paging", {})
);

//getAllContacts : array of objects with key as ID
export const getAllContacts = createSelector(
  [getContactsAllIds, getContactsById],
  (ids, ContactsById) => {
    const Contacts = {};

    if (ids && ContactsById) {
      ids.forEach((id) => {
        Contacts[id] = ContactsById[id];
      });
    }

    return Contacts;
  }
);

//ids prop will be array
const idsList = (state, { id, ids }) => {
  const data = id ? [id] : ids;
  return data;
};

//get Contacts by Ids
export const getContactsByIds = createSelector(
  [idsList, getContactsById],
  (ids, ContactsById) =>
    ids && ContactsById
      ? ids.map((id) => ({
          [id]: ContactsById[id],
        }))
      : []
);

export const isContactsFetching = createSelector([getContactsSlice], (slice) =>
  slice ? slice.isFetching : null
);

export const isContactsError = createSelector([getContactsSlice], (slice) =>
  slice ? slice.isError : null
);

//getAllContacts : array of objects with key as ID
export const getContactsByPagination = createSelector(
  [getContactsAllIds, getContactsById, getContactsPagination],
  (ids, ContactsById, paging) => {
    const Contacts = {};
    if (ids && ContactsById && paging) {
      try {
        const initialIndex = paging.currentPageKey * paging.pageSize;
        let indexEnd = initialIndex + paging.pageSize - 1;
        indexEnd = indexEnd >= paging.count ? paging.count - 1 : indexEnd;
        const idSlice = ids.slice(initialIndex, indexEnd + 1);
        idSlice.forEach((id) => {
          Contacts[id] = ContactsById[id];
        });
      } catch (e) {}
    }

    return Contacts;
  }
);

export const hasNextPage = createSelector([getContactsPagination], (slice) =>
  slice.nextPageKey == null ? false : true
);

export const hasPreviousPage = createSelector(
  [getContactsPagination],
  (slice) => (slice.previousPageKey == null ? false : true)
);

export const getPageKeys = (state) => {
  return {
    nextPageKey: get(getContactsSlice(state), "Paging.nextPageKey", null),
    previousPageKey: get(
      getContactsSlice(state),
      "Paging.previousPageKey",
      null
    ),
    count: get(getContactsSlice(state), "Paging.count", null),
  };
};
