import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../src/App";

import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("button is in page", () => {
    expect(screen.getByTestId("add-button")).toBeInTheDocument();
  });
});
