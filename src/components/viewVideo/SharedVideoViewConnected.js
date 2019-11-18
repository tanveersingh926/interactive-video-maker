import { connect } from "react-redux";
import SharedVideoView from "./SharedVideoView";
// import { deleteInteraction, saveVideo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    videos: state.myVideos.videos
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteInteraction: interactionID => {
//       dispatch(deleteInteraction(interactionID));
//     },
//     saveVideo: videoDetails => {
//       dispatch(saveVideo(videoDetails));
//     }
//   };
// };

const SharedVideoViewConnected = connect(
  mapStateToProps
  // ,mapDispatchToProps
)(SharedVideoView);

export default SharedVideoViewConnected;
