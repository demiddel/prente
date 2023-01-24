// // StoriesOf API
// import { storiesOf } from "@storybook/react";
// import { ProductListItem } from ".";

// storiesOf("Product List Item", module).add("standard", () => (
//   <ProductListItem />
// ));

// Component Story format (recommended way)
import { ProductListItem } from ".";
import { action } from "@storybook/addon-actions";

export default { title: "ProductListItem" };
export const standard = () => (
  <ProductListItem
    name="Standard Coffee"
    price="2.50"
    onAddToCart={action("Add to cart clicked")}
    imageUrl="https://source.unsplash.com/tNALoIZhqVM/200x100/"
  />
);

standard.args = {
  name: "Standard Coffee",
  price: "2.50",
  onAddToCart: '{action("Add to cart clicked")}',
  imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
};
standard.argTypes = {
  name: {
    control: {
      type: "text",
    },
  },
  price: {
    control: {
      type: "number",
    },
  },
  onAddToCart: {
    control: {
      type: "function",
    },
  },
  imageUrl: {
    control: {
      type: "text",
    },
  },
};
