import { createStore, applyMiddleware, combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";
import { apiClientMiddleware } from "../api-client/apiClientMiddleware";
import rootReducer from "../redux/api/reducers";
import rootAPISaga from "./api/sagas";
import rootCustomSaga from "./ui/sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import initialState from "./initState";

function* rootSaga() {
  yield all([rootAPISaga(), rootCustomSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, apiClientMiddleware]; //[sagaMiddleware, apiClientMiddleware];

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export default store;
