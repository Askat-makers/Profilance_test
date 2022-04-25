import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NewsSlice } from "./reducers/NewsSlice";
import { UserSlice } from "./reducers/UserSlice";

const rootReducer = combineReducers({
  user: UserSlice.reducer,
  news: NewsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
