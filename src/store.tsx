import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./component/feature/CounterSlice";

export default configureStore({
  reducer: {
    inquiry: counterReducer,
  },
});
