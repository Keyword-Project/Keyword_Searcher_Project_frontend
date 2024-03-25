import { configureStore } from "@reduxjs/toolkit";
import FetchSlice from "components/feature/FetchSlice";



export default configureStore({
  reducer: {
    queryString: FetchSlice
}});
