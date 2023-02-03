import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Error } from ".";

export default {
  title: `${atomicDir(base)}/Error`,
  component: Error,
};

const Default = (args) => <Error {...args} />;

Default.args = {
  message: "Some error message",
};

export { Default };
