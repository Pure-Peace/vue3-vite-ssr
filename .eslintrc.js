const idProd = process.env.NODE_ENV === "production"

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": idProd ? "warn" : "off",
    "no-debugger": idProd ? "warn" : "off",
    "quotes": "off",
    "no-unused-vars": "off",
    "import/no-absolute-path": "off",
    "no-template-curly-in-string": "off"
  },
};
