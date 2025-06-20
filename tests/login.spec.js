const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const config = require("../utils/config");

test.describe("Login Tests", () => {
  test(`User Role: ${process.env.USER_ROLE} should be able to login`, {
    tags: ["@smoke", "@login-flow"]
  }, async ({ page }) => {

    console.log(
      `Running tests on: ${config.baseURL} with user: ${config.username}`
    );
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.openModal();
    await loginPage.fillLoginForm(config.username, config.password);

    // Verify successful login
    await loginPage.submitLoginForm();
    await loginPage.waitForLogin();
  });
});