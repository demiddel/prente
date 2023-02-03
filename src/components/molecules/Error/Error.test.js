import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Error.stories";

const { Default } = composeStories(stories);

it("should render an Error component", () => {
  render(<Default />);
  // eslint-disable-next-line testing-library/no-node-access
  const element = screen.getByText(`Error: ${Default.args.message}`);

  expect(element).toBeDefined();
});
