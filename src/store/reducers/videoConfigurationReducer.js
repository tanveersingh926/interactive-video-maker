import { handleActions } from "redux-actions";
import {
  dummyAction,
  updateVideoDetails,
  updateVideoDuration,
  addInteraction,
  deleteInteraction,
  clearVideoDetails
} from "../actions/videoConfigurationActions";

const defaultState = {
  id: "",
  isEmailRequired: false,
  shortDescription: "",
  videoId: "",
  videoSource: "",
  videoTitle: "",
  videoUrl: "",
  videoDuration: 0,
  interactions: []
};
const initialState = Object.assign({}, defaultState);

// const defaultState = {
//   id: "e70724fc-89ff-43f4-adcb-7397c165baed",
//   isEmailRequired: false,
//   shortDescription: "Singer is Diljit Dosanjh feat Badshah",
//   videoId: "GVhmynWOPoM",
//   videoSource: "YOUTUBE",
//   videoTitle: "Proper Patola",
//   videoUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM",
//   videoDuration: 164,
//   interactions: [
//     {
//       questionLabel: "Who is featured in this song",
//       questionId: "afc8fae4-ed49-4ce5-a3ea-21b7cd9e6849",
//       responses: [
//         {
//           responseId: "04c3298c-7919-4418-b61d-822b6fcc017a",
//           responseText: "Badshah",
//           isCorrect: true,
//           noOfTimesResponseSelected: 0,
//           shouldOpenUrl: false,
//           resumeVideo: true
//         },
//         {
//           responseId: "e02be35a-fceb-42fb-9494-524c20a99bc0",
//           responseText: "Raftar",
//           noOfTimesResponseSelected: 0,
//           shouldOpenUrl: false,
//           resumeVideo: true
//         },
//         {
//           responseId: "5531e131-7078-416e-b404-4436aecfe694",
//           responseText: "Honey Singh",
//           urlToOpen:
//             "https://www.google.com/search?q=yo+yo+honey+singh&oq=yo+yo+hn",
//           noOfTimesResponseSelected: 0,
//           shouldOpenUrl: true,
//           resumeVideo: false
//         }
//       ],
//       displayQuestionAtSecond: "02"
//     },
//     {
//       questionLabel: "Who is singer in this song",
//       questionId: "402af50f-cf19-4ff4-808b-16bf18c8d23a",
//       responses: [
//         {
//           responseId: "dfc37579-1846-44ae-abff-990f8b2b3bc0",
//           responseText: "Karan Aujhla",
//           noOfTimesResponseSelected: 0,
//           shouldOpenUrl: false,
//           resumeVideo: true
//         },
//         {
//           responseId: "05850845-ec10-4640-a0d4-16ae93abfcce",
//           responseText: "Diljit Dosanjh",
//           noOfTimesResponseSelected: 0,
//           shouldOpenUrl: false,
//           resumeVideo: true
//         }
//       ],
//       displayQuestionAtSecond: "4"
//     }
//   ]
// };

const videoConfigurationReducer = handleActions(
  {
    [dummyAction]: state => ({
      ...state
    }),
    [addInteraction]: (state, { payload: newInteraction }) => ({
      ...state,
      interactions: [...state.interactions, newInteraction]
    }),
    [deleteInteraction]: (state, { payload: interactionId }) => {
      const updatedInteractions = state.interactions.filter(
        ({ questionId }) => questionId !== interactionId
      );
      return {
        ...state,
        interactions: [...updatedInteractions]
      };
    },
    [updateVideoDuration]: (state, { payload: videoDuration }) => ({
      ...state,
      videoDuration
    }),
    [clearVideoDetails]: () => ({
      ...initialState
    }),
    [updateVideoDetails]: (
      state,
      {
        payload: {
          videoId,
          videoTitle,
          shortDescription,
          videoUrl,
          videoSource,
          id
        }
      }
    ) => ({
      ...state,
      videoId,
      videoTitle,
      shortDescription,
      videoUrl,
      videoSource,
      id
    })
  },
  defaultState
);

export default videoConfigurationReducer;
