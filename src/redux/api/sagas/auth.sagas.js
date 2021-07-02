import { authActions } from "../actions/auth.actions";
import { apiEndPointConfig } from "../../../api-client/config";
import { buildApiEndpoint, apiClient } from "../../../api-client/apiClient";
import { put, call } from "@redux-saga/core/effects";
import { contactsActions } from "../actions/contacts.actions";
import constants from "../../constants";

export function* postAuthData(action) {
  const {
    payload: { params },
    meta,
  } = action;
  const dispatchAPIError = authActions.api.auth.post.error;

  try {
    const resource = "auth";
    const url = buildApiEndpoint(
      apiEndPointConfig.baseUrl,
      apiEndPointConfig.basePath,
      apiEndPointConfig.postAuthUrl
    );
    const { data: response, status } = yield call(apiClient.post, url, {
      ...params,
    });

    const dispatchAPIResponse = authActions.api.auth.post.receive;
    yield put(dispatchAPIResponse(response, status, resource, meta));
    //as soon as login is successful get contacts
    const dispatchContactRequest = contactsActions.api.contacts.get.request;
    yield put(dispatchContactRequest({query:{pageKey:0, pageSize: constants.PAGE_SIZE}}))
  } catch (exception) {
    yield put(dispatchAPIError({ ...exception }, meta));
  }
}
