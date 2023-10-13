module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
