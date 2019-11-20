import myVideosReducer from "../myVideosReducer";
import { saveVideo } from "../../actions";
const defaultState = {
  videos: [],
  fetchingVideos: false,
  fetchingVideosCompleted: false,
  fetchingVideosError: false,
  videoToView: {}
};
describe("myVideosReducer", () => {
  it("should videos array with length 1", () => {
    const myVideosState = myVideosReducer(
      defaultState,
      saveVideo({ videoId: "VideoID" })
    );
    expect(myVideosState.videos).toHaveLength(1);
  });
});
