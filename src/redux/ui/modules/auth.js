import { createActions } from "redux-actions";

export const authAction = createActions({
  handleLogin: (email, password) => ({
    email,
    password,
  }),
});
