import {
  SEND_NOTIFICATIONS,
  REMOVE_NOTIFICATIONS,
} from "../actions/index";

const NotificationReducer = (state = [], action) => {
  if (!action || !action.type) return state;
  switch (action.type) {
  case SEND_NOTIFICATIONS:
    return [
      action.payload,
      ...state.filter(({ id }) => id !== action.payload.id),
    ];
  case REMOVE_NOTIFICATIONS:
    return state.filter((state) => state.id !== action.payload);
  default:
    return state;
  }
};

export default NotificationReducer;