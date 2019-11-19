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
