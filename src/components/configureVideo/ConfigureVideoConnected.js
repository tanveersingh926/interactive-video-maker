import { connect } from "react-redux";
import ConfigureVideo from "./ConfigureVideo";

const mapStateToProps = state => {
  const { videoTitle, shortDescription, videoId } = state.videoConfiguration;
  return {
    videoTitle,
    shortDescription,
    videoId
  };
};

const ConfigureVideoConnected = connect(mapStateToProps)(ConfigureVideo);

export default ConfigureVideoConnected;
