import { createActions } from "redux-actions";

export const commonActions = createActions({
  api: { entities: { clear: { REQUEST: () => {} } } },
});
