const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'http://',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'reporters/custom.js',
  env: {
    fileOption: ''
  }
  
  
});
