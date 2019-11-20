import { put, takeLatest, call } from "redux-saga/effects";
import { history } from "../../router/AppRouter";
import {
  fetchAllVideos,
  saveAllVideos,
  fetchVideoById,
  saveVideoToView,
  saveVideo,
  clearVideoDetails
} from "../actions/";
import { getAllVideos, getVideoById, postVideo } from "../../services";

function* fetchAllVideosSaga() {
  try {
    const { data: allVideos } = yield call(getAllVideos);
    yield put(saveAllVideos(allVideos));
  } catch (error) {
    console.log(error);
  }
}

function* fetchVideoByIDSaga({ payload: idFromParam }) {
  try {
    const { data: videoToView } = yield call(getVideoById, idFromParam);
    yield put(saveVideoToView(videoToView));
  } catch (error) {
    console.log(error);
    yield call(history.push, "/");
  }
}

function* saveVideoSaga({ payload: videoDetail }) {
  try {
    yield call(postVideo, videoDetail);
    yield call(history.push, "/my-videos");
    yield put(clearVideoDetails());
  } catch (error) {
    console.log(error);
    alert("An error happened. Please try again later");
    yield call(history.push, "/");
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchAllVideos, fetchAllVideosSaga);
  yield takeLatest(fetchVideoById, fetchVideoByIDSaga);
  yield takeLatest(saveVideo, saveVideoSaga);
}
