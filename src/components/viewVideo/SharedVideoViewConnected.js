import { connect } from "react-redux";
import SharedVideoView from "./SharedVideoView";
import { fetchVideoByID } from "../../store/actions";
// import { deleteInteraction, saveVideo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    video: state.myVideos.videoToView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideoById: id => {
      dispatch(fetchVideoByID(id));
    }
  };
};

const SharedVideoViewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedVideoView);

export default SharedVideoViewConnected;
