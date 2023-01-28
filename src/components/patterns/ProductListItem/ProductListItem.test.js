import { render, fireEvent } from "@testing-library/react";
import { ProductListItem } from ".";

it("should show on sale label when it is on sale", () => {
  const { getByText } = render(
    <ProductListItem name="Mocha" price={3.5} imageUrl="..." isOnSale />
  );
  expect(getByText(/(On Sale)/)).toBeInTheDocument();
});

it("should disable the button when disabled", () => {
  const { getByText, getByRole } = render(
    <ProductListItem name="Mocha" price={3.5} imageUrl="..." isSoldOut />
  );
  expect(getByRole("button")).toHaveAttribute("disabled");
  expect(getByText(/Sold Out/)).toHaveAttribute("disabled");
});

it("should call the callback when button Add to Cart is pressed", () => {
  const onAddToCard = jest.fn();
  const { getByRole } = render(
    <ProductListItem name="Mocha" price={3.5} onAddToCart={onAddToCard} />
  );

  fireEvent.click(getByRole("button"));
  expect(onAddToCard).toHaveBeenCalled();
});
