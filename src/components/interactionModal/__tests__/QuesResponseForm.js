import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import QuesResponseForm from "../QuesResponseForm";
import { RESPONSE_ACTION } from "../../../constants";
import { Form } from "react-final-form";

const mockFnRemove = jest.fn();

const renderSubject = props => {
  const newProps = {
    index: 0,
    name: "formName[0]",
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
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit }) => <QuesResponseForm {...newProps} />}
    />
  );
};

describe("QuesResponseForm", () => {
  afterEach(cleanup);
  it("renders first response", () => {
    const { getByText } = renderSubject();
    getByText("Response 1");
    getByText("Open Link in new Tab");
  });

  it("should render remove button if more than 2 ans", () => {
    const { getByText } = renderSubject({ index: 2 });
    const removeBtn = getByText("Remove Response");
    fireEvent.click(removeBtn);
    expect(mockFnRemove).toHaveBeenCalled();
  });
});
