import { createSlice } from "@reduxjs/toolkit";
import { checkUser } from "../../helpers/functions";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      state.loading = true;
      const candidate = checkUser(action.payload);
      if (candidate) {
        state.user = candidate;
        state.loading = false;
        state.error = "";
      } else {
        state.error = "Такого пользователя не существует";
        state.loading = false;
      }
    },
    logOut(state) {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = UserSlice.actions;
