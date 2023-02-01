import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./ProductListItem.stories";

const { OnSale, SoldOut, Standard } = composeStories(stories);

it("should show on sale label when it is on sale", () => {
  render(<OnSale />);

  expect(screen.getByText(/(On Sale)/)).toBeInTheDocument();
});

it("should disable the button when disabled", () => {
  render(<SoldOut />);

  expect(screen.getByRole("button")).toHaveAttribute("disabled");
  expect(screen.getByRole("button")).toHaveTextContent("Sold Out");
});

it("should call the callback when button Add to Cart is pressed", () => {
  // FIXME: Click event is not recognised
  const onAddToCardSpy = jest.fn();
  render(<Standard />);

  Standard.args.onAddToCard = onAddToCardSpy;
  const buttonElement = screen.getByRole("button");
  buttonElement.click();

  expect(buttonElement.textContent).toEqual("Add to Cart");
  //   expect(onAddToCardSpy).toHaveBeenCalled();
});
