import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Card } from ".";

export default { title: `${atomicDir(base)}/Card`, component: Card };

const Template = (args) => <Card {...args} />;

const Default = Template.bind({});

Default.args = {
  children: "Some text",
};

export { Default };
