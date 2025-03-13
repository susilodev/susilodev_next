import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: ['node_modules/', 'dist/', '.next/'], // Tambahkan folder yang harus di-ignore
  },
  js.configs.recommended,
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:mdx/recommended',
    'next',
    'next/core-web-vitals'
  ),
  {
    settings: {
      'mdx/code-blocks': true,
      'mdx/language-mapper': {},
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.amd,
        ...globals.node,
      },

      parser: tsParser,
      parserOptions: {
        extraFileExtensions: ['.mdx'],
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'], // Pastikan tsconfig.json ada
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      // Aturan A11y untuk Next.js
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],

      // Maksimal panjang kode (warning, bukan error)
      // 'max-len': ['warn', { code: 100, ignoreUrls: true, ignoreComments: true }],
    },
  },
]
