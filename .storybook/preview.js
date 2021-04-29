import React from "react";
import { MemoryRouter } from "react-router";

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
