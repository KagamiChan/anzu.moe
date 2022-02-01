// @ts-check

/** @type { import("@types/eslint").Linter.Config } */
module.exports = {
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
