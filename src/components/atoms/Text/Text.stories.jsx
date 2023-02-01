import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Text } from ".";

export default { title: `${atomicDir(base)}/Text`, component: Text };

const Default = (args) => <Text {...args} />;

Default.args = {
  children: "Some text",
};

export { Default };
