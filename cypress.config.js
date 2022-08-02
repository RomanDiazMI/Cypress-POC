const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries: {
    openMode: 1,
    runMode: 1,
  },
  env: {
    allure: true,
    allureResultsPath: "allure-results"
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = dotenvPlugin(config)
      allureWriter(on, config);
      return config
    },
  },
});
