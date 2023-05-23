const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'http://',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    fileOption: ''
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  }
  
});
