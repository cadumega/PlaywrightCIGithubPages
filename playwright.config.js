const { defineConfig } = require("@playwright/test");
const config = require("./utils/config");

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: ['**/*.spec.js', '**/*.test.js'],
  timeout: 120000,
  // retries: 1,
  workers: 1, // Run tests in parallel
  reporter: [["list"], ["allure-playwright"]],
  outputDir: 'test-results/',
  use: {
    baseURL: config.baseURL, // Load URL based on ENV
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    actionTimeout: 30000, 
    navigationTimeout: 60000,

    waitForLoadState: 'domcontentloaded',

  },
  projects: [
    { 
      name: "chromium", 
      use: { 
        browserName: "chromium",
        // Configurações específicas do Chrome para estabilidade
        launchOptions: {
          args: [
            '--disable-web-security',
            '--disable-features=TranslateUI',
            '--disable-ipc-flooding-protection',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding'
          ]
        }
      } 
    },
  ],
    //{ name: "firefox", use: { browserName: "firefox" } },
    //{ name: "webkit", use: { browserName: "webkit" } },
});