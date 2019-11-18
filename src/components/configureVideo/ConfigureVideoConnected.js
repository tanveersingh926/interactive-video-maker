import { connect } from "react-redux";
import ConfigureVideo from "./ConfigureVideo";
import { deleteInteraction } from "../../store/actions";

const mapStateToProps = state => {
  const {
    videoTitle,
    shortDescription,
    videoId,
    interactions
  } = state.videoConfiguration;
  return {
    videoTitle,
    shortDescription,
    videoId,
    interactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteInteraction: interactionID => {
      dispatch(deleteInteraction(interactionID));
    }
  };
};

const ConfigureVideoConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigureVideo);

export default ConfigureVideoConnected;
