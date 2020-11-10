module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    // "plugin:@typescript-eslint/recommended",
    "standard-with-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    // "ecmaVersion": 2018,
    // "sourceType": "module"
  },
  "rules": {
    "semi": ["warn", "never"],
    // "quotes": ["error", "double"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        "ignoreParameters": true
      }
    ],
    "@typescript-eslint/no-unused-vars": "warn",

    "no-void": "off",
  }
}