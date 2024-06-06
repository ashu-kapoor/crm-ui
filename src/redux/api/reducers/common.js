import constants from "../../constants";

export const defaultStateShape = {
  byId: {},
  allIds: [],
  Paging: {
    count: 0,
    pageSize: constants.PAGE_SIZE,
    nextPageKey: null,
    previousPageKey: null,
    currentPageKey: 0,
  },
};

export const defaultAuthShape = {
  isAuthorized: false,
  token: null,
  userId: null,
};

export const reducerRequest = (state) => ({
  ...state,
  isFetching: true,
  isError: false,
});

export const reducerError = (state, { payload: error }) => ({
  ...state,
  isFetching: false,
  isError: true,
  error,
});

export const reducerClear = () => ({ ...defaultStateShape });

export const nextPageReducer = (state) => {
  const PagingObj = state.Paging;
  const Paging = { ...PagingObj };

  let lastKey = Math.floor(state.Paging.count / state.Paging.pageSize) - 1;
  lastKey =
    state.Paging.count % state.Paging.pageSize === 0 ? lastKey : lastKey + 1;

  Paging.currentPageKey =
    state.Paging.currentPageKey + 1 > lastKey
      ? lastKey
      : state.Paging.currentPageKey + 1;
  Paging.nextPageKey =
    Paging.currentPageKey === lastKey ? null : Paging.currentPageKey + 1;
  Paging.previousPageKey = state.Paging.currentPageKey - 1;

  return {
    ...state,
    Paging,
  };
};

export const previousPageReducer = (state) => {
  const PagingObj = state.Paging;
  const Paging = { ...PagingObj };
  Paging.currentPageKey =
    state.Paging.currentPageKey - 1 < 0 ? 0 : state.Paging.currentPageKey - 1;
  Paging.previousPageKey =
    Paging.currentPageKey === 0 ? null : Paging.currentPageKey - 1;

  let lastKey = Math.floor(state.Paging.count / state.Paging.pageSize) - 1;
  lastKey =
    state.Paging.count % state.Paging.pageSize === 0 ? lastKey : lastKey + 1;

  Paging.nextPageKey =
    Paging.currentPageKey === lastKey ? null : Paging.currentPageKey + 1;

  return {
    ...state,
    Paging,
  };
};

export const firstPageReducer = (state) => {
  const PagingObj = state.Paging;
  const Paging = { ...PagingObj };
  Paging.currentPageKey = 0;
  Paging.previousPageKey = null;

  let lastKey = Math.floor(state.Paging.count / state.Paging.pageSize) - 1;
  lastKey =
    state.Paging.count % state.Paging.pageSize === 0 ? lastKey : lastKey + 1;

  Paging.nextPageKey =
    Paging.currentPageKey === lastKey ? null : Paging.currentPageKey + 1;

  return {
    ...state,
    Paging,
  };
};

export const lastPageReducer = (state) => {
  const PagingObj = state.Paging;
  const Paging = { ...PagingObj };
  const pageKey = Math.floor(state.Paging.count / state.Paging.pageSize) - 1;
  Paging.currentPageKey =
    state.Paging.count % state.Paging.pageSize === 0 ? pageKey : pageKey + 1;
  Paging.nextPageKey = null;

  Paging.previousPageKey =
    Paging.currentPageKey == 0 ? null : Paging.currentPageKey - 1;

  return {
    ...state,
    Paging,
  };
};
