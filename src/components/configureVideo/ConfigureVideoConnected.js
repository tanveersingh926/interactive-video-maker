import { connect } from "react-redux";
import ConfigureVideo from "./ConfigureVideo";
import { deleteInteraction, saveVideo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    videoTitle: state.videoConfiguration.videoTitle,
    videoId: state.videoConfiguration.videoId,
    shortDescription: state.videoConfiguration.shortDescription,
    interactions: state.videoConfiguration.interactions,
    videoDetails: state.videoConfiguration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteInteraction: interactionID => {
      dispatch(deleteInteraction(interactionID));
    },
    saveVideo: videoDetails => {
      dispatch(saveVideo(videoDetails));
    }
  };
};

const ConfigureVideoConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigureVideo);

export default ConfigureVideoConnected;
