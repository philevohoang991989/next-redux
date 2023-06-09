import { User } from "@/models/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUsers?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUsers: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUsers = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUsers = undefined;
    },
  },
});
// Actions
export const authActions = authSlice.actions;
//Selectors
// Reducer

const authReducer = authSlice.reducer;
export default authReducer;
