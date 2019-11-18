import { connect } from "react-redux";
import AddInteractionModal from "./AddInteractionModal";
import { addInteraction } from "../../store/actions";

const mapStateToProps = state => {
  const { videoDuration } = state.videoConfiguration;
  return {
    videoDuration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addInteraction: interactionDetails => {
      dispatch(addInteraction(interactionDetails));
    }
  };
};
const AddInteractionModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInteractionModal);

export default AddInteractionModalConnected;
