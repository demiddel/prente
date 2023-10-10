import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Products.stories";

const { Standard } = composeStories(stories);

it("should render a product list", () => {
  render(< Standard />);
  // eslint-disable-next-line testing-library/no-node-access
  const element = screen.getByText("Product List");

  expect(element).toBeDefined();
});
