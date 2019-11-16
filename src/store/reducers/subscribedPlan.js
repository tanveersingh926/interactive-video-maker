import { handleActions } from "redux-actions";
import {
  updateNewTokens,
  updateExistingTokens,
  dummyAction
} from "../actions/subscribedPlan";

const defaultState = {
  newTokens: 1400,
  existingTokens: 700,
  subscriptionExpiry: "03-04-2019",
  planCode: "ROTD"
};

const subscribedPlanReducer = handleActions(
  {
    [updateNewTokens]: (state, { payload: { newTokens } }) => {
      console.log("here");
      return {
        ...state,
        newTokens
      };
    },
    [dummyAction]: (state, { payload }) => ({
      ...state
    })
  },
  defaultState
);

export default subscribedPlanReducer;
