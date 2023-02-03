import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Loading } from ".";

export default {
  title: `${atomicDir(base)}/Loading`,
  component: Loading,
};

const Default = (args) => <Loading {...args} />;

Default.args = {
  message: "Loading text message",
};

export { Default };
