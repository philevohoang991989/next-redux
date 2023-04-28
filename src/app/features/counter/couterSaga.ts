import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

// function* test(){
//     yield fetchCount(2)
//     // and
//     yield call(fetchCount, 2)
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  console.log("handle Increment Saga");

  yield delay(2000);

  console.log("Waiting done, dispatch action");

  //   Dispath action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log("counter saga");

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
