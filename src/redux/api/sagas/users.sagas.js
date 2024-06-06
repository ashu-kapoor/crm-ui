import { usersActions } from "../actions/users.actions";
import { call, put, select } from "@redux-saga/core/effects";
import { apiClient, buildApiEndpoint } from "../../../api-client/apiClient";
import { apiEndPointConfig } from "../../../api-client/config";
import { formatResponse } from "../helpers/common";

export function* getUsersData(action) {
  const {
    payload: { pathParams, params },
    meta,
  } = action;
  const dispatchApiError = usersActions.api.users.get.error;
  try {
    const resource = "users";
    const url = buildApiEndpoint(
      apiEndPointConfig.baseUrl,
      apiEndPointConfig.basePath,
      apiEndPointConfig.getUsersUrl
    );
    const allParams = { ...params };
    const { data: response, status } = yield call(apiClient.get, url, {
      params: allParams,
    });
    const formattedResponse = formatResponse(response);
    const dispatchApiResponse = usersActions.api.users.get.receive;
    yield put(dispatchApiResponse(formattedResponse, status, resource, meta));
  } catch (exception) {
    yield put(dispatchApiError({ ...exception }, meta));
  }
}
