import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Products } from ".";

export default {
  title: `${atomicDir(base)}/Products`,
  component: Products,
};

const Default = (args) => <Products {...args} />;
const Standard = Default.bind({});
Standard.args = {data: {
  products: [
    {
      id: "pixel-6",
      name: "Pixel 6",
      price: 980,
      imageUrl: "pixel.jpg",
      isSoldOut: false,
      isOnSale: true,
    }, ,
  ]
}}

export { Standard };
