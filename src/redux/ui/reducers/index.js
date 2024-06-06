import { combineReducers } from "redux";
import { notificationReducer } from "../modules/notification";

export const rootUIReducer = combineReducers({
  Notification: notificationReducer,
});
