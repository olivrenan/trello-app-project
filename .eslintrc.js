module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["react", "jest", "prettier"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/prefer-stateless-function": "off",
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: false
      }
    ],
    "react/sort-comp": [
      1,
      {
        order: ["static-methods", "lifecycle", "everything-else", "rendering"],
        groups: {
          rendering: ["/^render.+$/", "render"]
        }
      }
    ],
    "consistent-return": "off",
    "class-methods-use-this": "off",
    camelcase: "off",
    "func-names": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "prefer-spread": "off",
    "default-case": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "react/require-default-props": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }],
    "react/destructuring-assignment": "off",
    "react/no-access-state-in-setstate": "off",
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-curly-spacing": ["warn", "never"],
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx"] }],
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/no-array-index-key": "off",
    "react/jsx-handler-names": [
      "warn",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on"
      }
    ],
    "react/no-unused-state": "warn",
    "react/jsx-indent": ["warn", 2],
    "react/jsx-key": "error",
    "react/jsx-wrap-multilines": ["warn"],
    "react/jsx-indent-props": "off",
    "react/button-has-type": "off",
    "react/jsx-handler-names": "off",
    "no-trailing-spaces": [2, { skipBlankLines: true }],
    "prefer-template": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "babel/object-curly-spacing": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-for": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    eqeqeq: "off"
  },
  globals: {
    React: true,
    require: true
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack/webpack.common.js"
      }
    }
  }
};
