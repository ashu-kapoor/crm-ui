import { takeLatest, put } from "@redux-saga/core/effects";
import { opportunitiesActions } from "../../api/actions/opportunities.actions";
import { casesActions } from "../../api/actions/cases.actions";
import { usersActions } from "../../api/actions/users.actions";
import { productsActions } from "../../api/actions/products.actions";
import { contactActions as customContactAction } from "../modules/contacts";

export function* fetchRelatedEntities({ payload }) {
  yield put(
    opportunitiesActions.api.opportunities.get.request({
      pathParams: { contactId: payload.contactId },
    })
  );
  yield put(
    casesActions.api.cases.get.request({
      pathParams: { contactId: payload.contactId },
    })
  );
  //fetch all users and products
  yield put(
    usersActions.api.users.get.request({
      meta: { action: "GET_USERS" },
    })
  );
  yield put(
    productsActions.api.products.get.request({
      meta: { action: "GET_PRODUCTS" },
    })
  );
}

export default function* contactsSagas() {
  yield takeLatest(
    [customContactAction.fetchRelatedEntities],
    fetchRelatedEntities
  );
}
