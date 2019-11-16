import React from "react";
import { render } from "@testing-library/react";
import AppConnected from "../AppConnected";
import { Provider } from "react-redux";
import store from "../../../store";

it("renders welcome message", () => {
  const updateNewTokens = jest.fn();
  const { getByText } = render(
    <Provider store={store}>
      <AppConnected updateNewTokens={updateNewTokens} />
    </Provider>
  );
  expect(getByText("Learn React")).toBeInTheDocument();
  //   expect(getByText("Learn React")).toBeTruthy(); //.toBeInTheDocument();
});
