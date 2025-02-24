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
  ],

  ignorePatterns: ["**/file-templates/**"],

  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },

  rules: {
    /**
     * Documentation:
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
     *
     * Defined at:
     * https://github.com/IsaacScript/isaacscript/blob/main/packages/eslint-config-isaacscript/base.js
     *
     * This package uses a non-standard output folder, so we have to customize this rule.
     */
    "n/shebang": [
      "error",
      {
        convertPath: {
          "src/**/*.ts": ["^src/(.+?)\\.ts$", "src/$1.js"],
        },
      },
    ],
  },

  overrides: [
    {
      files: ["./src/plugins/*.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
