import IncreaseButton from "components/IncreaseButton";
import {test,  expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<IncreaseButton />);
    expect(screen.getByText("Increase")).toBeDefined();
  });
});