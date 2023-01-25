// // StoriesOf API
// import { storiesOf } from "@storybook/react";
// import { ProductListItem } from ".";

// storiesOf("Product List Item", module).add("standard", () => (
//   <ProductListItem />
// ));

// Component Story format (recommended way)
import { ProductListItem } from ".";
import { action } from "@storybook/addon-actions";

export default { title: "ProductListItem", component: ProductListItem };

const Template = (args) => <ProductListItem {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  name: "Standard Coffee",
  price: "2.50",
  imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  isSoldOut: false,
  onAddToCart: action("Add to cart clicked"),
};
