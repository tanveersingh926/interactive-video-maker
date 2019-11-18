import { createAction } from "redux-actions";

export const dummyAction = createAction("dummy action");

export const updateVideoDetails = createAction("Update Video Details");
export const clearVideoDetails = createAction(
  "clear all data of the current video"
);
export const deleteInteraction = createAction(
  "Delete interaction from the video via ID"
);
export const addInteraction = createAction(
  "Add interaction to display on the video"
);
export const updateVideoDuration = createAction(
  "Update Video Duration in the store"
);
