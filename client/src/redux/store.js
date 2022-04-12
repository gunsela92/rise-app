import { configureStore } from "@reduxjs/toolkit"
import AppReducer from "./DataReducer/reducer";
import NotificationReducer from "./Notifications/reducer";

export default configureStore({
  reducer: {
    AppReducer: AppReducer,
    Notifications: NotificationReducer
  },
})