const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportHeight: 1080, //altura
    viewportWidth: 1920, // largura
    baseUrl: `https://www.blazedemo.com/`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
