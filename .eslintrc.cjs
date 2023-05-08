module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  extends: [
    "plugin:markdown/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-default-export": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "prettier/prettier": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
  ],
};
