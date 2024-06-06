import { createActions } from "redux-actions";

export const contactActions = createActions({
  fetchRelatedEntities: (contactId) => ({
    contactId,
  }),
});
