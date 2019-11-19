import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AddNewVideoConnected from "../AddNewVideoConnected";
import { Provider } from "react-redux";
import store from "../../../store/configureStore";

jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(() => ({ push: jest.fn() }))
}));

describe("component should render with all basic sections", () => {
  afterEach(cleanup);

  const renderSubject = props => {
    const newProps = {
      ...props
    };

    return render(
      <Provider store={store}>
        <AddNewVideoConnected {...newProps} />
      </Provider>
    );
  };
  jest.setTimeout(30000);
  window.alert = jest.fn();

  it("renders Header with given Value", async () => {
    const { getByText, getByPlaceholderText, debug } = renderSubject({
      updateVideoDetails: () => console.log("test updateVideoDetails")
    });

    const titleInput = getByPlaceholderText("Enter Video Title");
    fireEvent.change(titleInput, { target: { value: "titleInput" } });
    fireEvent.touchStart(titleInput, { target: { value: "titleInput" } });

    const descInput = getByPlaceholderText("Enter Short Description");
    fireEvent.change(descInput, { target: { value: "descInput" } });
    fireEvent.touchStart(descInput, { target: { value: "descInput" } });

    const linkInput = getByPlaceholderText("Enter youtube video link");
    fireEvent.change(linkInput, {
      target: { value: "https://www.youtube.com/watch?v=U65TWIP3mpQ" }
    });
    fireEvent.touchStart(linkInput, {
      target: { value: "https://www.youtube.com/watch?v=U65TWIP3mpQ" }
    });
    console.log(debug());
    fireEvent.click(getByText("Continue"));
  });
});
