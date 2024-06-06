import { productsActions } from "../actions/products.actions";
import { call, put } from "@redux-saga/core/effects";
import { apiClient, buildApiEndpoint } from "../../../api-client/apiClient";
import { apiEndPointConfig } from "../../../api-client/config";
import { formatResponse } from "../helpers/common";

export function* getProductsData(action) {
  const {
    payload: { pathParams, params },
    meta,
  } = action;
  const dispatchApiError = productsActions.api.products.get.error;
  try {
    const resource = "products";
    const url = buildApiEndpoint(
      apiEndPointConfig.baseUrl,
      apiEndPointConfig.basePath,
      apiEndPointConfig.getProductsUrl
    );
    const allParams = { ...params };
    const { data: response, status } = yield call(apiClient.get, url, {
      params: allParams,
    });
    const formattedResponse = formatResponse(response);
    const dispatchApiResponse = productsActions.api.products.get.receive;
    yield put(dispatchApiResponse(formattedResponse, status, resource, meta));
  } catch (exception) {
    yield put(dispatchApiError({ ...exception }, meta));
  }
}
