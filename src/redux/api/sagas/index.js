import { takeLatest, all } from "@redux-saga/core/effects";
import { usersActions } from "../actions/users.actions";
import { productsActions } from "../actions/products.actions";
import { authActions } from "../actions/auth.actions";
import { getUsersData } from "./users.sagas";
import { getProductsData } from "./products.sagas";
import { postAuthData } from "./auth.sagas";

export default function* rootAPISaga() {
  yield all([
    yield takeLatest(usersActions.api.users.get.request, getUsersData),
    yield takeLatest(productsActions.api.products.get.request, getProductsData),
    yield takeLatest(authActions.api.auth.post.request, postAuthData),
  ]);
}
