import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

it("should click on the button", () => {
  const onClickSpy = jest.fn();
  render(<Button onClick={onClickSpy} />);

  // expect(screen.geb)
});
