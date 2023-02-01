import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Text.stories";

const { Default } = composeStories(stories);

it("should render a text span", () => {
  render(<Default />);
  // eslint-disable-next-line testing-library/no-node-access
  const element = screen.getByText(Default.args.children);

  expect(element).toBeDefined();
});
