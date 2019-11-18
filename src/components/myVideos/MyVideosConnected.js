import { connect } from "react-redux";
import MyVideos from "./MyVideos";

const mapStateToProps = state => {
  return {
    videos: state.myVideos.videos
  };
};

const MyVideosConnected = connect(mapStateToProps)(MyVideos);

export default MyVideosConnected;
