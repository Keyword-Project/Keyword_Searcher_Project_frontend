import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Date {
  toISOString(): { startDate: undefined; endDate: undefined; };
  startDate: string | undefined;
  endDate: string | undefined;
}

export const FetchSlice = createSlice({
  name: "queryString",
  initialState: {
    pathName: "",
    date: { startDate: undefined, endDate: undefined },
  },
  reducers: {
    pathNameFetch: (state, action: PayloadAction<string>) => {
      state.pathName = action.payload;
    },
    dateFetch: (state, action: PayloadAction<Date>) => {
      state.date = action.payload.toISOString();
    },
  },
});

// Action creators are generated for each case reducer function
export const { pathNameFetch, dateFetch } = FetchSlice.actions;

export default FetchSlice.reducer;
