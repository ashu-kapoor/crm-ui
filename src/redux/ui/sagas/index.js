import { all } from "@redux-saga/core/effects";
import usersSagas from "./users.sagas";
import productsSagas from "./products.sagas";
import authSagas from "./auth.sagas";

export default function* rootCustomSaga() {
  yield all([productsSagas(), usersSagas(), authSagas()]);
}
