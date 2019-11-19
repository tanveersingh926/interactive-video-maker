import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../../../store/configureStore";
import { APP_TITLE } from "../../../constants";

describe("component should render with all basic sections", () => {
  const renderSubject = props => {
    const newProps = {
      ...props
    };

    return render(
      <Provider store={store}>
        <App {...newProps} />
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

  it("should call method on window.onload", async () => {
    global.onload = jest.fn();
    const { getByText, queryByText } = renderSubject();
    getByText("Loading...");

    await wait(() => global.onload());
    const didFind = await queryByText("Loading...");
    expect(didFind).toBeFalsy();
  });
});
