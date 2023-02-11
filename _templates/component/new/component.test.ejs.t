---
to: src/components/atoms/<%= name %>/<%= name %>.test.js
---

import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./<%= name %>.stories";

const { Default } = composeStories(stories);

it("should render the <%= name %>", () => {
  render(<Default />);

  const <%= name %>Element = screen.getByRole("heading");

  expect(<%= name %>Element).toBeDefined();
});


