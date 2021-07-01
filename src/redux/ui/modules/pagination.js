import { createActions } from "redux-actions";

export const paginationActions = createActions({
  handlePreviousPagination: (entityName) => ({ entityName }),
  handleNextPagination: (entityName) => ({ entityName }),
  handleFirstPagination: (entityName) => ({ entityName }),
  handleLastPagination: (entityName) => ({ entityName }),
});
