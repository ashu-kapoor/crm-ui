import { get } from "lodash";
import constants from "../../constants";

export const getNotificationSlice = (state) =>
  get(state, "UI.Notification", null);

export const isNotificationVisible = (state) => {
  return get(getNotificationSlice(state), "visible", false);
};

export const notificationStyle = (state) => {
  return get(getNotificationSlice(state), "mode", constants.NOTIFY_MSG);
};

export const getNotificationMessage = (state) => {
  return get(getNotificationSlice(state), "message", null);
};
