import { connect } from "react-redux";
import { updateVideoDuration } from "../../store/actions/";
import Video from "./Video";

const mapDispatchToProps = dispatch => {
  return {
    updateVideoDuration: videoDuration => {
      dispatch(updateVideoDuration(videoDuration));
    }
  };
};

const VideoConnected = connect(null, mapDispatchToProps)(Video);

export default VideoConnected;
