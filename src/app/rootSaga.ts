"use client";
import { all } from "redux-saga/effects";
import counterSaga from "./features/counter/couterSaga";
import authSaga from "./features/auth/authSaga";
export default function* rootSaga() {
  yield all([counterSaga(), authSaga()]);
  console.log("Root Saga");
}
