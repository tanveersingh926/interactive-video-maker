import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import AppWrapper from "../AppWrapper";

describe("AppWrapper", () => {
  const renderSubject = (props, children) => {
    const newProps = {
      displayParentComponents: true,
      route: "A route",
      ...props
    };

    return render(<AppWrapper {...newProps}>{children}</AppWrapper>);
  };

  it("renders AppWrapper with Parent", () => {
    const { getByText } = renderSubject(
      { displayParentComponents: true },
      <div>Parent Component</div>
    );
    getByText("Parent Component");
  });

  it("should not render AppWrapper with Parent", () => {
    const { queryByText } = renderSubject(
      { displayParentComponents: false },
      <div>Parent Component</div>
    );
    expect(queryByText("Parent Component")).toBeNull();
  });
});
