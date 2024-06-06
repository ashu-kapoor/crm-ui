import { authActions } from "../../api/actions/auth.actions";
import { put, takeLatest } from "@redux-saga/core/effects";
import { authAction as customAuthAction } from "../modules/auth";

export function* login({ payload }) {
  yield put(
    authActions.api.auth.post.request({
      params: payload,
      meta: { action: "LOGIN" },
    })
  );
}

export default function* authSagas() {
  yield takeLatest([customAuthAction.handleLogin], login);
}
