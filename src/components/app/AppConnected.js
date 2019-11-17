import { connect } from "react-redux";
import { updateNewTokens } from "../../store/actions/";
import App from "./App";

const mapStateToProps = state => {
  return {
    existingTokens: state.videoConfiguration.existingTokens,
    newTokens: state.videoConfiguration.newTokens,
    subscriptionExpiry: state.videoConfiguration.subscriptionExpiry
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewTokens: dress => {
      dispatch(updateNewTokens(dress));
    }
  };
};

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
