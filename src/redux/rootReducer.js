import { combineReducers } from "redux";
import { apiReducer } from "./api/reducers";
import { rootUIReducer } from "./ui/reducers";
import { authReducer } from "./api/reducers/auth.reducer";

const rootReducer = combineReducers({
  Data: apiReducer.crm,
  Auth: authReducer,
  UI: rootUIReducer,
});

export default rootReducer;
