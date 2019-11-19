import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

describe("component should render with all basic sections", () => {
  afterEach(cleanup);

  it("should render page snapshot", async () => {
    const { asFragment } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
