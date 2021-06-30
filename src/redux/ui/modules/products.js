import { createActions } from "redux-actions";

export const productActions = createActions({
  handleGetProduct: (userId) => ({
    userId,
  }),
  handleGetProducts: () => ({}),
});
