import { handleActions } from "redux-actions";
import {
  dummyAction,
  updateVideoDetails,
  updateVideoDuration
} from "../actions/videoConfigurationActions";

// const defaultState = {
//   videoTitle: null,
//   shortDescription: null,
//   videoSource: null,
//   videoId: null,
//   videoUrl: null,
//   isEmailRequired: false,
//   interactions: []
// };
const defaultState = {
  id: "e70724fc-89ff-43f4-adcb-7397c165baed",
  isEmailRequired: false,
  shortDescription: "This description will come in my videos",
  videoId: "GVhmynWOPoM",
  videoSource: "YOUTUBE",
  videoTitle: "Song",
  videoUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM",
  videoDuration: 0,
  interactions: []
};
/*interactions: [
    {
      questionLabel: ,
      questionId: 1,
      responses: [
        {
          responseId: 1,
          responseText: "s",
          isCorrect: false,
          shouldOpenUrl: true,
          urlToOpen: "http://google.com",
          resumeVideo: false,
          noOfTimesResponseSelected: 0
        }
      ],
      displayQuestionAtSecond: 123
    }
  ] */
const videoConfigurationReducer = handleActions(
  {
    [dummyAction]: (state, { payload }) => ({
      ...state
    }),
    [updateVideoDuration]: (state, { payload: videoDuration }) => ({
      ...state,
      videoDuration
    }),
    [updateVideoDetails]: (
      state,
      {
        payload: {
          videoId,
          videoTitle,
          shortDescription,
          videoUrl,
          videoSource
        }
      }
    ) => ({
      ...state,
      videoId,
      videoTitle,
      shortDescription,
      videoUrl,
      videoSource
    })
  },
  defaultState
);

export default videoConfigurationReducer;
