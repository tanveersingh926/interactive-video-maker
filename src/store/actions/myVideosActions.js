import { createAction } from "redux-actions";

export const saveVideo = createAction("Save video to myVideos");
export const saveAllVideos = createAction("Save all video to myVideos");
export const saveVideoToView = createAction(
  "Save video to view in the standalone page"
);
export const removeVideoToView = createAction(
  "remove video to view in the standalone page"
);
export const fetchAllVideos = createAction("Get all videos from the server");
export const fetchVideoByID = createAction("Get video by ID from the server");
export const fetchVideosCompleted = createAction(
  "Get videos from the server completed"
);
export const fetchVideosError = createAction(
  "Get videos from the server, error thrown"
);
