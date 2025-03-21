import stylisticJs from '@stylistic/eslint-plugin-js';
import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: [
      // Disse erstatningerne for de "extends" vi ville have i .eslintrc.json
      nextPlugin.configs['core-web-vitals'],
      tsPlugin.configs.recommended,
    ],
    rules: {
      // Vores egne regler
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    }
  }
];