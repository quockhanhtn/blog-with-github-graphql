module.exports = {
  globals: {
    React: true,
    JSX: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', 'react-hooks', 'react'],
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'consistent-return': 1,
    import: 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'no-alert': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: false,
        args: 'none',
      },
    ],
    'no-restricted-exports': 0,
    'no-use-before-define': 0,
    'prettier/prettier': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/button-has-type': 1,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-key': 1,
    'react/jsx-no-bind': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 0,
    'react/no-inline-styles': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 0,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
  },
};
