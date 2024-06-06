import { takeLatest, all } from "@redux-saga/core/effects";
import { usersActions } from "../actions/users.actions";
import { productsActions } from "../actions/products.actions";
import { authActions } from "../actions/auth.actions";
import { casesActions } from "../actions/cases.actions";
import { contactsActions } from "../actions/contacts.actions";
import { opportunitiesActions } from "../actions/opportunities.actions";
import { getUsersData } from "./users.sagas";
import { getProductsData } from "./products.sagas";
import { postAuthData } from "./auth.sagas";
import { getContactsData } from "./contacts.sagas";
import { getOptiesForContact } from "./opportunities.sagas";
import { getCasesForContact } from "./cases.sagas";

export default function* rootAPISaga() {
  yield all([
    yield takeLatest(usersActions.api.users.get.request, getUsersData),
    yield takeLatest(productsActions.api.products.get.request, getProductsData),
    yield takeLatest(authActions.api.auth.post.request, postAuthData),
    yield takeLatest(contactsActions.api.contacts.get.request, getContactsData),
    yield takeLatest(
      opportunitiesActions.api.opportunities.get.request,
      getOptiesForContact
    ),
    yield takeLatest(casesActions.api.cases.get.request, getCasesForContact),
  ]);
}
