import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Loading.stories";

const { Default } = composeStories(stories);

it("should render a Loading component", () => {
  render(<Default />);
  // eslint-disable-next-line testing-library/no-node-access
  const element = screen.getByText(`Loading: ${Default.args.message}`);

  expect(element).toBeDefined();
});
