import { takeLatest, put, call } from "@redux-saga/core/effects";
import { usersActions } from "../../api/actions/users.actions";
import { userActions as customUserAction } from "../modules/users";

export function* handleGetUsers({}) {
  yield put(
    usersActions.api.users.get.request({ meta: { action: "GET_USERS" } })
  );
}

export default function* usersSagas() {
  yield takeLatest([customUserAction.handleGetUsers], handleGetUsers);
}
