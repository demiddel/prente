import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { ProductList } from ".";

export default {
  title: `${atomicDir(base)}/ProductList`,
  component: ProductList,
};

const Template = (args) => <ProductList {...args} />;

const Standard = Template.bind({});

Standard.args = {
  children: "test",
};

export { Standard };
