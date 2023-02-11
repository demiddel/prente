---
to: src/components/atoms/<%= name %>/<%= name %>.stories.js
---
import base from "paths.macro";
import { atomicDir } from "../../../utils/atomicDir";

import { <%= %> } from '.';

export default { title: `${atomicDir(base)/<%= name %>`, component: <%= name %> };

const Template = (args) => <<%= name %> {...args} />;

const Default = Template.bind({});

Default.args = {

}

export { Default };
