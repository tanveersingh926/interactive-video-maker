import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AppConnected from "../AppConnected";
import { Provider } from "react-redux";
import store from "../../../store";
import { APP_TITLE } from "../../../constants";

describe("component should render with all basic sections", () => {
  const updateNewTokens = jest.fn();
  const renderSubject = props => {
    const newProps = {
      updateNewTokens,
      ...props
    };

    return render(
      <Provider store={store}>
        <AppConnected {...newProps} />
      </Provider>
    );
  };

  it("renders Header with given Value", () => {
    const { getByText } = renderSubject();
    expect(getByText(APP_TITLE)).toBeInTheDocument();
  });

  it("should render menuBar", () => {
    const { getByText } = renderSubject();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Add new Videos")).toBeInTheDocument();
    expect(getByText("My Videos")).toBeInTheDocument();
  });

  it("renders Add new video card", () => {
    const { getByText } = renderSubject();
    fireEvent.click(getByText("Lets go!"));

    expect(getByText("Short Description")).toBeInTheDocument();
  });

  it("should render new page after add new button clicked", () => {
    const { getByText } = renderSubject();
    expect(getByText("Short Description")).toBeInTheDocument();
  });
});
