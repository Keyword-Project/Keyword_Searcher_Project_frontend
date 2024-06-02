import { configureStore } from "@reduxjs/toolkit";
import FetchSlice from "lib/FetchSlice";

export default configureStore({
  reducer: {
    queryString: FetchSlice,
  },
});
      