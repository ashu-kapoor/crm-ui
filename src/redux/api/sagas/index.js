import { takeLatest, all } from "@redux-saga/core/effects";
import { usersActions } from "../actions/users.actions";
import { productsActions } from "../actions/products.actions";
import { authActions } from "../actions/auth.actions";
import { contactsActions } from "../actions/contacts.actions";
import { getUsersData } from "./users.sagas";
import { getProductsData } from "./products.sagas";
import { postAuthData } from "./auth.sagas";
import { getContactsData } from "./contacts.sagas";

export default function* rootAPISaga() {
  yield all([
    yield takeLatest(usersActions.api.users.get.request, getUsersData),
    yield takeLatest(productsActions.api.products.get.request, getProductsData),
    yield takeLatest(authActions.api.auth.post.request, postAuthData),
    yield takeLatest(contactsActions.api.contacts.get.request, getContactsData),
  ]);
}
