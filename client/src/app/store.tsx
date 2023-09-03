import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userProfileSlice from "../features/userProfileSlice/userProfileSlice";
import loginSlice from "../features/loginSlice/loginSlice";
import signupSlice from "../features/signupSlice/signupSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    login: loginSlice,
    signup: signupSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
