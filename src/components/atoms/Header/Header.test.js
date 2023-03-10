import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Header.stories";

const { Default } = composeStories(stories);

it("should render the header with the 'Header text' text", () => {
  render(<Default />);

  const headerElement = screen.getByRole("heading");

  // eslint-disable-next-line testing-library/no-node-access
  expect(headerElement).toHaveTextContent(Default.args.children);
});
