import "../src/theme.css";
import { makeServer } from "../src/server";

makeServer({ environment: "development" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
