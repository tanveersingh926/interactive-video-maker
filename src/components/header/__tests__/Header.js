import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

it("renders welcome message", () => {
  const title = "Interactive Video Maker";
  const { getByText } = render(<Header title={title} />);
  expect(getByText("Interactive Video Maker")).toBeInTheDocument();
});
