// eslint.config.js
// @ts-ignore
import js from '@eslint/js';
// @ts-ignore
import globals from 'globals';
// @ts-ignore
import tseslint from 'typescript-eslint';
// @ts-ignore
import prettier from 'eslint-config-prettier';
// @ts-ignore
import pluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
    // базовый JavaScript-конфиг
    js.configs.recommended,
    // TypeScript-конфиги
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    // твои собственные правила и настройки
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            semi: ['error', 'always'],
            // quotes: ['error', 'single'],
            '@typescript-eslint/no-unused-vars': ['error'],
            'prettier/prettier': ['error', { singleQuote: true }]
        },
        extends: [prettier],
    }
);