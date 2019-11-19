import React from "react";
import { render } from "@testing-library/react";
import ModalInline from "../ModalInline";

describe("component should render with all basic sections", () => {
  const renderSubject = (props, children) => {
    const newProps = {
      isOpen: false,
      className: "test",
      ...props
    };

    return render(<ModalInline {...newProps}>{children}</ModalInline>);
  };

  it("renders modal with isOpen true", () => {
    const { getByText } = renderSubject({ isOpen: true }, "Hi");
    expect(getByText("Hi")).toBeInTheDocument();
  });
  it("dhould not render is isOpen is false", () => {
    const { queryByText } = renderSubject({ isOpen: false }, "Hi");
    expect(queryByText("Hi")).toBeNull();
  });
});
