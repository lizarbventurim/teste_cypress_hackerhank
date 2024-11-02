const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8000',
    testIsolation: false,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/junit.xml',
    toConsole: true
  },
  video: false,
  screenshotOnRunFailure: false,
});