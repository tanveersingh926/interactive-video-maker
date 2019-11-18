import { handleActions } from "redux-actions";
import { saveVideo } from "../actions/";

const defaultState = {
  videos: [
    {
      id: "e70724fc-89ff-43f4-adcb-7397c165baed",
      isEmailRequired: false,
      shortDescription: "This description will come in my videos",
      videoId: "GVhmynWOPoM",
      videoSource: "YOUTUBE",
      videoTitle: "Song",
      videoUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM",
      videoDuration: 164,
      interactions: [
        {
          questionLabel: "Ques",
          questionId: 1,
          responses: [
            {
              responseId: 1,
              responseText: "sd",
              isCorrect: true,
              urlToOpen: "google",
              noOfTimesResponseSelected: 0,
              shouldOpenUrl: true,
              resumeVideo: false
            },
            {
              responseId: 1,
              responseText: "asd",
              isCorrect: true,
              noOfTimesResponseSelected: 0,
              shouldOpenUrl: false,
              resumeVideo: true
            }
          ],
          displayQuestionAtSecond: "12"
        },
        {
          questionLabel: "New Question",
          questionId: 2,
          responses: [
            {
              responseId: 1,
              responseText: "sd",
              isCorrect: true,
              urlToOpen: "google",
              noOfTimesResponseSelected: 0,
              shouldOpenUrl: true,
              resumeVideo: false
            },
            {
              responseId: 1,
              responseText: "asdgd",
              isCorrect: true,
              noOfTimesResponseSelected: 0,
              shouldOpenUrl: false,
              resumeVideo: true
            }
          ],
          displayQuestionAtSecond: "45"
        }
      ]
    }
  ]
};

const myVideosReducer = handleActions(
  {
    [saveVideo]: (state, { payload: newVideo }) => ({
      ...state,
      videos: [...state.videos, newVideo]
    })
  },
  defaultState
);

export default myVideosReducer;
