import { connect } from "react-redux";
import { updateVideoDuration, removeVideoToView } from "../../store/actions/";
import Video from "./Video";

const mapDispatchToProps = dispatch => {
  return {
    updateVideoDuration: videoDuration => {
      dispatch(updateVideoDuration(videoDuration));
    },
    removeVideoToView: () => {
      dispatch(removeVideoToView());
    }
  };
};

const VideoConnected = connect(null, mapDispatchToProps)(Video);

export default VideoConnected;
