export const defaultStateShape = {
  byId: {},
  allIds: [],
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
