import { casesActions } from "../actions/cases.actions";
import { call, put } from "@redux-saga/core/effects";
import { apiClient, buildApiEndpoint } from "../../../api-client/apiClient";
import { apiEndPointConfig } from "../../../api-client/config";
import { formatResponse } from "../helpers/common";

export function* getCasesForContact(action) {
  const {
    payload: { pathParams, params },
    meta,
  } = action;
  const dispatchApiError = casesActions.api.cases.get.error;
  const { query } = params;
  try {
    const resource = "opties";
    const url = buildApiEndpoint(
      apiEndPointConfig.baseUrl,
      apiEndPointConfig.basePath,
      apiEndPointConfig.getContactCasesUrl,
      pathParams
    );
    const allParams = { ...params };
    const { data: response, status } = yield call(apiClient.get, url, {
      params: { ...query },
    });
    const formattedResponse = formatResponse(response);
    const dispatchApiResponse = casesActions.api.contacts.cases.receive;
    yield put(dispatchApiResponse(formattedResponse, status, resource, meta));
  } catch (exception) {
    yield put(dispatchApiError({ ...exception }, meta));
  }
}
