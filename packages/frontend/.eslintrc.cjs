module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersions: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    projects: ["tsconfig.eslint.json"],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
