import { handleActions } from "redux-actions";
import {
  saveVideo,
  fetchAllVideos,
  saveAllVideos,
  fetchVideoById,
  saveVideoToView,
  removeVideoToView
} from "../actions/";

const defaultState = {
  videos: [],
  fetchingVideos: false,
  fetchingVideosCompleted: false,
  fetchingVideosError: false,
  videoToView: {}
};

const myVideosReducer = handleActions(
  {
    [saveVideo]: (state, { payload: newVideo }) => ({
      ...state,
      videos: [...state.videos, newVideo]
    }),
    [saveVideoToView]: (state, { payload: videoToView }) => ({
      ...state,
      videoToView
    }),
    [removeVideoToView]: state => ({
      ...state,
      videoToView: {}
    }),
    [saveAllVideos]: (state, { payload: allVideos }) => ({
      ...state,
      videos: [...allVideos]
    }),
    [fetchAllVideos]: state => ({
      ...state,
      fetchingVideos: false,
      fetchingVideosCompleted: false,
      fetchingVideosError: false
    }),
    [fetchVideoById]: state => ({
      ...state
    })
  },
  defaultState
);

export default myVideosReducer;
