import globals from 'globals/index.js'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import storybook from 'eslint-plugin-storybook'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  ...storybook.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ignores: ['package/dist/**', 'dist', 'pnpm-lock.yaml', '!.storybook']
  },
  {
    files: ['pages/*.vue'],
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ]
    }
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        parser: {
          ts: tseslint.parser
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    }
  }
]
