module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    "React": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "import",
    "jsx-a11y",
    "react-hooks"
  ],
  ignorePatterns: [
    "node_modules/",
    "out/"
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": 0,
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": 0,
    "semi": [1, "always"],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": 1,
    "jsx-a11y/no-noninteractive-element-interactions": 1,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 1,
    "jsx-a11y/no-noninteractive-tabindex": 1,
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    },
    react: {
      version: "latest",
    },
  },
  overrides: [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
};
