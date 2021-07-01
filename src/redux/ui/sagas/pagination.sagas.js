import { takeLatest, put } from "@redux-saga/core/effects";
import { usersActions } from "../../api/actions/users.actions";
import { productsActions } from "../../api/actions/products.actions";
import { paginationActions } from "../modules/pagination";

export function* handlePreviousPagination({ payload }) {
  const { entityName } = payload;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.previous());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.previous());
      break;
  }
}

export function* handleNextPagination({ payload }) {
  const { entityName } = payload;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.next());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.next());
      break;
  }
}

export function* handleFirstPagination({ payload }) {
  const { entityName } = payload;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.first());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.first());
      break;
  }
}

export function* handleLastPagination({ payload }) {
  const { entityName } = payload;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.last());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.last());
      break;
  }
}

export default function* paginationSagas() {
  yield takeLatest(
    [paginationActions.handlePreviousPagination],
    handlePreviousPagination
  );
  yield takeLatest(
    [paginationActions.handleNextPagination],
    handleNextPagination
  );
  yield takeLatest(
    [paginationActions.handleFirstPagination],
    handleFirstPagination
  );
  yield takeLatest(
    [paginationActions.handleLastPagination],
    handleLastPagination
  );
}
