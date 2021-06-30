import { combineReducers } from "redux";
import { usersReducer } from "./user.reducer";
import { productsReducer } from "./product.reducer";
import { contactsReducer } from "./contact.reducer";
import { casesReducer } from "./case.reducer";
import { opportunitiesReducer } from "./opportunity.reducer";

export const apiReducer = {
  crm: combineReducers({
    Users: usersReducer,
    Products: productsReducer,
    Contacts: contactsReducer,
    Cases: casesReducer,
    Opportunities: opportunitiesReducer,
  }),
};
