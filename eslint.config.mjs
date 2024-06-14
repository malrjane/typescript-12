import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.browser } },
  { ignores: ["src/ts/__tests__", "dist", "jest.config.js", "webpack.config.js"] },
  pluginJs.configs.recommended,
];