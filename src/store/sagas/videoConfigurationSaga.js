import { put, takeLatest } from "redux-saga/effects";
import { updateVideoDetails, dummyAction } from "../actions/index";

function* updateVideoDetailsSaga() {
  console.log("updateVideoDetailsSaga ran");
  yield put(dummyAction());
}

export default function* rootSaga() {
  // yield takeLatest(updateVideoDetails, updateVideoDetailsSaga);
}
