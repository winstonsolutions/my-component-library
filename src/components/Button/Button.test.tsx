import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders button", () => {
    render(<Button label="Test" />);
    expect(screen.getByText("Test")).toBeVisible();
  });
  test("changes style when disabled", () => {
    render(<Button label="Test" disabled />);
    expect(screen.getByText("Test")).toHaveStyle("background-color: #ccc");
  });
});