module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  coverageReporters: ['json', 'lcov', 'html'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**', '!**/coverage/**'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 4,
      branches: 2,
      functions: 7,
      lines: 4
    }
  }
};
