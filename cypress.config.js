const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: "zo4czu",

  e2e: {
    baseUrl: 'http://localhost:3000/',
    redirectionLimit: 100,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    blockHosts: [
      '*googlesyndication.com',
      '*google-analytics.com',
      '*googletagmanager.com',
      '*googletagservices.com',
      '*doubleclick.net',
      '*adservice.google.com',
      '*facebook.net'
    ],
    experimentalRunAllSpecs: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
    },
  },
});