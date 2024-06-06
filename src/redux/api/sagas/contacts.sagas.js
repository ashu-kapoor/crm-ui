import { contactsActions } from "../actions/contacts.actions";
import { call, put } from "@redux-saga/core/effects";
import { apiClient, buildApiEndpoint } from "../../../api-client/apiClient";
import { apiEndPointConfig } from "../../../api-client/config";
import { formatResponse } from "../helpers/common";

export function* getContactsData(action) {
  const {
    payload: { pathParams, params },
    meta,
  } = action;
  const dispatchApiError = contactsActions.api.contacts.get.error;
  const { query } = params;
  try {
    const resource = "users";
    const url = buildApiEndpoint(
      apiEndPointConfig.baseUrl,
      apiEndPointConfig.basePath,
      apiEndPointConfig.getContactsUrl
    );
    const allParams = { ...params };
    const { data: response, status } = yield call(apiClient.get, url, {
      params: { ...query },
    });
    const formattedResponse = formatResponse(response);
    const dispatchApiResponse = contactsActions.api.contacts.get.receive;
    yield put(dispatchApiResponse(formattedResponse, status, resource, meta));
  } catch (exception) {
    yield put(dispatchApiError({ ...exception }, meta));
  }
}
