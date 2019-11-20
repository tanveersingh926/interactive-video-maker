import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import AddInteractionModalConnected from "../AddInteractionModalConnected";
import { RESPONSE_ACTION } from "../../../constants";
import { Form } from "react-final-form";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

const mockFnRemove = jest.fn();

describe("AddInteractionModal", () => {
  afterEach(cleanup);

  let store;
  beforeEach(() => {
    store = mockStore({
      videoConfiguration: {}
    });
    store.dispatch = jest.fn();
  });

  const renderSubject = props => {
    const newProps = {
      addInteraction: jest.fn(),
      isOpen: true,
      setModalIsOpen: () => console.log("test"),
      values: {
        responses: [
          {
            responseAction: RESPONSE_ACTION.OPEN_LINK
          }
        ]
      },
      fields: { remove: mockFnRemove },
      ...props
    };

    return render(
      <Provider store={store}>
        <Form
          onSubmit={values => console.log(values)}
          render={({ handleSubmit }) => (
            <AddInteractionModalConnected {...newProps} />
          )}
        />
      </Provider>
    );
  };

  it("Add another response", () => {
    const { getByText, debug } = renderSubject();
    debug();
    // getByText("Response 1");
    // fireEvent.click(getByText("Save and Add Another"));
    // fireEvent.click(getByText("Save"));
    fireEvent.click(getByText("Add Another Response"));
    // fireEvent.click(getByText("Cancel"));
    debug();
    // getByText("Open Link in new Tab");
  });

  // it("Remove another response", () => {
  //   const { getByText, debug } = renderSubject();
  //   debug();
  //   // getByText("Response 1");
  //   // fireEvent.click(getByText("Save and Add Another"));
  //   // fireEvent.click(getByText("Save"));
  //   fireEvent.click(getByText("Add Another Response"));
  //   // fireEvent.click(getByText("Cancel"));
  //   debug()
  //   // getByText("Open Link in new Tab");
  // });
});
