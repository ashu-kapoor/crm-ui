import { createAction } from "redux-actions";
import { handleAction } from "redux-actions";
import constants from "../../constants";

export const notificationAction = createAction(
  "setNotification",
  (visible, mode, message) => ({ visible, mode, message })
);

export const notificationReducer = handleAction(
  notificationAction,
  (state = {}, action) => {
    const { payload } = action;
    return {
      ...state,
      mode: payload.mode,
      visible: payload.visible,
      message: payload.message,
    };
  },
  { visible: false, mode: constants.NOTIFY_MSG, message: null }
);
