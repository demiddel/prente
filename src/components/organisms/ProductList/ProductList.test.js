import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./ProductList.stories";
import { statusTypes } from "./ProductList";

const { Standard } = composeStories(stories);

it("should render a ProductList", () => {
  render(<Standard />);
  // eslint-disable-next-line testing-library/no-node-access
  const element = screen.getByText("Product List");

  expect(element).toBeDefined();
});
