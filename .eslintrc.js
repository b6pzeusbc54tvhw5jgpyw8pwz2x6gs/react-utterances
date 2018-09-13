module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "16.5",
      "flowVersion": "0.53"
    },
  },
  rules: {
    'semi': ["error", "never"],
    'no-console': ["error", { allow: ["warn", "error"] }],
  },
}
