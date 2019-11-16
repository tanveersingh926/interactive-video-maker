import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { updateNewTokens, dummyAction } from "../actions/index";

function* updateNewTokensSaga() {
  console.log("updateNewTokensSaga ran");
  yield put(dummyAction());
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeLatest(updateNewTokens, updateNewTokensSaga);
  //   yield all([helloSaga(), watchIncrementAsync()]);
}
