// // StoriesOf API (deprecated)
// import { storiesOf } from "@storybook/react";
// import { ProductListItem } from ".";

// storiesOf("Product List Item", module).add("standard", () => (
//   <ProductListItem />
// ));

// Component Story Format (recommended way)
import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";
import { action } from "@storybook/addon-actions";

import { ProductListItem } from ".";

export default {
  title: `${atomicDir(base)}/ProductListItem`,
  component: ProductListItem,
};

const Template = (args) => <ProductListItem {...args} />;

const Standard = Template.bind({});

Standard.args = {
  name: "Standard Coffee",
  price: 2.5,
  imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  isSoldOut: false,
  isOnSale: false,
  onAddToCart: action("Add to cart clicked"),
};

const SoldOut = Template.bind({});

SoldOut.args = {
  name: "Standard Coffee",
  price: 2.5,
  imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  isSoldOut: true,
  isOnSale: false,
  onAddToCart: action("Add to cart clicked"),
};

const OnSale = Template.bind({});

OnSale.args = {
  name: "Standard Coffee",
  price: 2.5,
  imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  isSoldOut: false,
  isOnSale: true,
  onAddToCart: action("Add to cart clicked"),
};

export { Standard, SoldOut, OnSale };
