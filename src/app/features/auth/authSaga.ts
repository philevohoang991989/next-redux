import { LoginPayload, authActions } from "./authSlice";
import Router from 'next/router';
import { call, fork, put, take } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem("access_token", "dasfdfsfsdf");
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "phi",
      })
    );
    yield Router.replace('/admin');
  } catch (error) {
    yield put(authActions.loginFailed("login failed"));
  }
}
function* handleLogout() {
  localStorage.removeItem("access_token");
  yield Router.replace('/auth/login');
  //redirect to login page
}
function* watchLoginFlow() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    while (true) {
      const isLoggedIn = Boolean(token);
      if (!isLoggedIn) {
        const action: PayloadAction<LoginPayload> = yield take(
          authActions.login.type
        );
        yield fork(handleLogin, action.payload);
      }
      yield take(authActions.logout.type);
      yield call(handleLogout);
    }
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
