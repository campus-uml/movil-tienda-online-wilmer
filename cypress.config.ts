const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "a3rudo",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})