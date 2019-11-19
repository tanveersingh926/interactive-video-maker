import { connect } from "react-redux";
import MyVideos from "./MyVideos";
import { fetchAllVideos } from "../../store/actions";

const mapStateToProps = state => {
  return {
    videos: state.myVideos.videos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllVideos: () => {
      dispatch(fetchAllVideos());
    }
  };
};

const MyVideosConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyVideos);

export default MyVideosConnected;
