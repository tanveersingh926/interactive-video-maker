import { createAction } from "redux-actions";

export const updateNewTokens = createAction("update new tokens value");
export const dummyAction = createAction("dummy action");
export const updateExistingTokens = createAction(
  "update existing tokens value"
);
