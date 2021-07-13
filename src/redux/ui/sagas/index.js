import { all } from "@redux-saga/core/effects";
import usersSagas from "./users.sagas";
import productsSagas from "./products.sagas";
import authSagas from "./auth.sagas";
import paginationSagas from "./pagination.sagas";
import contactsSagas from "./contacts.sagas";

export default function* rootCustomSaga() {
  yield all([
    productsSagas(),
    usersSagas(),
    authSagas(),
    paginationSagas(),
    contactsSagas(),
  ]);
}
