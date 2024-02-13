import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle1: false,
  togle1: false,
  messageSent1: false,
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    check: (state: any, { payload }) => {
      state.user = payload;
    },
    changeToggle: (state: any, { payload }) => {
      state.toggle1 = payload;
    },
    messToggle: (state: any, { payload }) => {
      state.togle1 = payload;
    },
    messageSentHold: (state: any, { payload }) => {
      state.messageSent1 = payload;
    },
  },
});

export const { check, changeToggle, messToggle, messageSentHold } =
  reduxState.actions;

export default reduxState.reducer;
