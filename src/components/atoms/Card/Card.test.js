import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Card.stories";

const { Default } = composeStories(stories);

it("should render the Card with the 'Some text' text", () => {
  render(<Default />);

  const cardElement = screen.getByRole("article");

  // eslint-disable-next-line testing-library/no-node-access
  expect(cardElement).toHaveTextContent(Default.args.children);
});
