module.exports = {
  extends: [
    // Detect possible errors and enforce
    // style guidelines.
    'stylelint-config-standard',
    // Accept css modules specific syntax
    // like :global and :local
    'stylelint-config-css-modules'
  ],
  rules: {
    // Allow scss at-rules
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for', 'if', 'else', 'include', 'mixin']
      }
    ],

    // Disable these rule since they don't play
    // well with Prettier's formatting.
    'value-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,

    // Disallow vendor prefixes unless they are ones
    // that Autoprefixer wouldn't provide, such
    // as -webkit-font-smoothing.
    'property-no-vendor-prefix': true,

    // Avoid deeply nested selectors, see
    // https://smacss.com/book/applicability
    // for rationale. Get this number lower
    // if possible.
    'selector-max-compound-selectors': 8,

    // Keep specificity as low as possible, for
    // the same reason that it's important to
    // avoid nested selectors. Get this number
    // lower if possible.
    'selector-max-specificity': '2,2,1',

    // This is just needed to get legacy code to be
    // ok. Ideally it should be removed and the
    // code should be fixed.
    'no-descending-specificity': null
  }
};
