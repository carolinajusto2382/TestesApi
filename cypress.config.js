const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "31987z",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
