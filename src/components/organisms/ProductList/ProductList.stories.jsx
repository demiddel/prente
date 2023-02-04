import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { ProductList } from ".";
import { statusTypes } from "./ProductList";

export default {
  title: `${atomicDir(base)}/ProductList`,
  component: ProductList,
};

const Template = (args) => <ProductList {...args} />;

const Standard = Template.bind({});

Standard.args = {
  status: statusTypes.loaded,
  data: [
    {
      id: 2,
      name: "Sencha",
      price: 3.75,
      imageUrl:
        "https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100",
    },
  ],
};

const Loading = Template.bind({});

Loading.args = {
  status: statusTypes.loading,
  data: [],
};

const Error = Template.bind({});
Error.args = {
  status: statusTypes.errored,
  data: [],
};

export { Standard, Loading, Error };
