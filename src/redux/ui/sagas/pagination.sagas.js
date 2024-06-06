import { takeLatest, put } from "@redux-saga/core/effects";
import { usersActions } from "../../api/actions/users.actions";
import { productsActions } from "../../api/actions/products.actions";
import { contactsActions } from "../../api/actions/contacts.actions";
import { paginationActions } from "../modules/pagination";
import constants from "../../constants";

export function* handlePreviousPagination({ payload }) {
  const { entityName, page } = payload;
  const { previousPageKey } = page;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.previous());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.previous());
      break;
    case "Contacts":
      yield put(
        contactsActions.api.contacts.get.request({
          query: { pageKey: previousPageKey, pageSize: constants.PAGE_SIZE },
        })
      );
      break;
  }
}

export function* handleNextPagination({ payload }) {
  const { entityName, page } = payload;
  const { nextPageKey } = page;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.next());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.next());
      break;
    case "Contacts":
      yield put(
        contactsActions.api.contacts.get.request({
          query: { pageKey: nextPageKey, pageSize: constants.PAGE_SIZE },
        })
      );
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
    case "Contacts":
      yield put(
        contactsActions.api.contacts.get.request({
          query: { pageKey: 0, pageSize: constants.PAGE_SIZE },
        })
      );
      break;
  }
}

export function* handleLastPagination({ payload }) {
  const { entityName, page } = payload;
  const { count } = page;

  switch (entityName) {
    case "Products":
      yield put(productsActions.api.products.pagination.last());
      break;
    case "Users":
      yield put(usersActions.api.users.pagination.last());
      break;
    case "Contacts":
      const lastKey =
        count % constants.PAGE_SIZE === 0
          ? count / constants.PAGE_SIZE - 1
          : count / constants.PAGE_SIZE;

      yield put(
        contactsActions.api.contacts.get.request({
          query: {
            pageKey: Math.floor(lastKey),
            pageSize: constants.PAGE_SIZE,
          },
        })
      );
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
