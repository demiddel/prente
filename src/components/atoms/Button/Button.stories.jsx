import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Button } from ".";

export default { title: `${atomicDir(base)}/Button`, component: Button };

const Template = (args) => <Button {...args} />;

const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Click here",
};

export { Primary };
