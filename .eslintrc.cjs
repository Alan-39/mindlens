/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
