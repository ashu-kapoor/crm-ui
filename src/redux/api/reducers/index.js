import { combineReducers } from "redux";
import { usersReducer } from "./user.reducer";
import { productsReducer } from "./product.reducer";
import { authReducer } from "./auth.reducer";

const apiReducer = {
  crm: combineReducers({ Users: usersReducer, Products: productsReducer }),
};

const rootReducer = combineReducers({
  Data: apiReducer.crm,
  Auth: authReducer,
});

export default rootReducer;
