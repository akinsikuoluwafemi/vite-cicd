module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "__test__/**/*",
    ".eslintrc.cjs",
    "jest.config.ts",
    "vite.config.ts",
    "mocks/**/*",
  ],
};
