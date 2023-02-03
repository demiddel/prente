import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Products } from ".";

export default {
  title: `${atomicDir(base)}/Products`,
  component: Products,
};

const Default = (args) => <Products {...args} />;

export { Default };
