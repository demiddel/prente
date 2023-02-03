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
};

const Loading = Template.bind({});

Loading.args = {
  status: statusTypes.loading,
};

const Error = Template.bind({});
Error.args = {
  status: statusTypes.errored,
};

export { Standard, Loading, Error };
