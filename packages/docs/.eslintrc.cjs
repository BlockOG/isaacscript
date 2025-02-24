const path = require("node:path");

const REPO_ROOT = path.join(__dirname, "..", "..");
const ESLINT_CONFIG_ISAACSCRIPT_PATH = path.join(
  REPO_ROOT,
  "packages",
  "eslint-config-isaacscript",
  "configs",
);

module.exports = {
  extends: [
    path.join(ESLINT_CONFIG_ISAACSCRIPT_PATH, "base.js"),
    path.join(ESLINT_CONFIG_ISAACSCRIPT_PATH, "monorepo.js"),

    "plugin:@docusaurus/recommended",
  ],

  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },

  env: {
    browser: true,
  },

  ignorePatterns: ["**/docusaurus/**", "!.remarkrc.mjs"],

  rules: {
    "import/no-default-export": "off", // React uses default exports.
    "n/file-extension-in-import": "off", // Docusaurus does not yet use ESM.
    "no-alert": "off",
  },
};
