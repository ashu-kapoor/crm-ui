import { takeLatest, put, call } from "@redux-saga/core/effects";
import { productsActions } from "../../api/actions/products.actions";
import { productActions as customProductAction } from "../modules/products";

export function* handleGetProducts({}) {
  yield put(
    productsActions.api.products.get.request({
      meta: { action: "GET_PRODUCTS" },
    })
  );
}

export default function* productsSagas() {
  yield takeLatest([customProductAction.handleGetProducts], handleGetProducts);
}
