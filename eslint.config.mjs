// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import { configs as reactHooksConfig } from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended, //
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooksConfig['recommended-latest'],
  {
    rules: {
      'no-console': 'warn',
      'sort-imports': 'off',
    },
  },
  prettierRecommended,
  defineConfig(globalIgnores(['public/', '.cache/'])),
);
