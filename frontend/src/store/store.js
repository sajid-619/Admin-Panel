import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import partnerReducer from "./partnerSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    partner: partnerReducer,
  },
});