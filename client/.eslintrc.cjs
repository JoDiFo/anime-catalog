module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "i18next"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
  ignorePatterns: ["eslint.cjs"],
};
