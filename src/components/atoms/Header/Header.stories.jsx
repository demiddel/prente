import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { Header } from ".";

export default { title: `${atomicDir(base)}/Header`, component: Header };

const Template = (args) => <Header {...args} />;

const Default = Template.bind({});

Default.args = {
  children: "Header text",
};

export { Default };
