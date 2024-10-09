import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-undef": "warn" ,
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [ "error" ],
      "react/jsx-filename-extension": [ "warn", { "extensions": [ ".tsx" ] } ],
      "import/extensions": [ "error", "ignorePackages", { "ts": "never", "tsx": "never" } ],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": [ "error" ],
      "@typescript-eslint/explicit-function-return-type": [ "error", { "allowExpressions": true } ],
      "max-len": [ "warn", { "code": 100, "ignoreComments": true, "ignoreUrls": true } ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "prettier/prettier": [ "error", { "endOfLine": "auto" } ]
    },
  },
]
