import { createActions } from "redux-actions";

export const userActions = createActions({
  handleGetUser: (userId) => ({
    userId,
  }),
  handleGetUsers: () => ({}),
});
