import { createAction } from "redux-actions";

export const dummyAction = createAction("dummy action");

export const updateVideoDetails = createAction("Update Video Details");
export const updateVideoDuration = createAction(
  "Update Video Duration in the store"
);
