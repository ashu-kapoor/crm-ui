import { createActions } from "redux-actions";

export const paginationActions = createActions({
  handlePreviousPagination: (entityName, page = {}) => ({
    entityName,
    page,
  }),
  handleNextPagination: (entityName, page = {}) => ({
    entityName,
    page,
  }),
  handleFirstPagination: (entityName, page = {}) => ({
    entityName,
    page,
  }),
  handleLastPagination: (entityName, page = {}) => ({
    entityName,
    page,
  }),
});
