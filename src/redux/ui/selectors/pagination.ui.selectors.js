import {
  hasNextPage as productNextPage,
  hasPreviousPage as productPreviousPage,
} from "../../api/selectors/products.selectors";

export const hasNextPage = (state, entityName) => {
  switch (entityName) {
    case Products:
      return productNextPage(state);
  }
};

export const hasPreviousPage = (state, entityName) => {
  switch (entityName) {
    case Products:
      return productPreviousPage(state);
  }
};
