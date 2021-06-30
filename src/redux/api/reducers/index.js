import { combineReducers } from "redux";
import { usersReducer } from "./user.reducer";
import { productsReducer } from "./product.reducer";

export const apiReducer = {
  crm: combineReducers({ Users: usersReducer, Products: productsReducer }),
};
