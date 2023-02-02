import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

it("should render the button with the 'Click here' text", () => {
  const onClickSpy = jest.fn();
  render(<Primary onClick={onClickSpy} />);

  const buttonElement = screen.getByRole("button");
  buttonElement.click();

  // eslint-disable-next-line testing-library/no-node-access
  expect(buttonElement).toHaveTextContent(Primary.args.children);
  expect(onClickSpy).toHaveBeenCalled();
});
