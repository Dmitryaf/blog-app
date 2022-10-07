import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("Button without props", () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText("Test button")).toBeInTheDocument();
    screen.debug();
  });
  test("Button with theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test button theme</Button>);
    expect(screen.getByText("Test button theme")).toHaveClass("clear");
    screen.debug();
  });
});
