module.exports = {
  extends: [
    'airbnb', // Use Airbnb's style conventions
    'prettier' // Turn off the rules that conflict with prettier
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    es6: true
  },
  overrides: [
    {
      // Allow jest globals only in test files
      files: ['**/*.test.{js,jsx}'],
      env: { jest: true }
    }
  ],
  rules: {
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    // You can put important stuff at the top of a file that relies on
    // stuff declared later. This rule ensure that it's hoisted safely.
    'no-use-before-define': ['error', 'nofunc'],
    'object-shorthand': 0,
    'prefer-promise-reject-errors': 0,
    'max-len': [2, { code: 120, ignoreUrls: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/**/*Test*.{js,jsx}',
          'src/**/*test*.{js,jsx}',
          'src/**/*.test.{js,jsx}',
          'src/**/*.spec.{js,jsx}'
        ]
      }
    ],
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // Use src/components/data-table or variants
          { target: './src', from: 'node_modules/react-table' },
          // Use src/components/date-picker
          { target: './src', from: 'node_modules/react-datepicker' }
        ]
      }
    ],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'react/jsx-closing-bracket-location': 0,
    'react/jsx-no-bind': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0, // conflicts with prettier
    'react/no-did-mount-set-state': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false
      }
    ]
  }
};
