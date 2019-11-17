import { connect } from "react-redux";
import { updateVideoDetails } from "../../store/actions/";
import AddNewVideo from "./AddNewVideo";

const mapDispatchToProps = dispatch => {
  return {
    updateVideoDetails: videoDetails => {
      dispatch(updateVideoDetails(videoDetails));
    }
  };
};

const AddNewVideoConnected = connect(null, mapDispatchToProps)(AddNewVideo);

export default AddNewVideoConnected;
