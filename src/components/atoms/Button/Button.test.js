import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

it("should render the button with the 'Click here' text", () => {
  render(<Primary />);

  const buttonElement = screen.getByRole("button");

  // eslint-disable-next-line testing-library/no-node-access
  expect(buttonElement).toHaveTextContent(Primary.args.children);
});
