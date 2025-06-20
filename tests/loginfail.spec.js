import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.princessauto.com/en/');
  await page.getByRole('link', { name: ' Log In' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('carlos.mega@objectedge.com');
  await page.getByRole('textbox', { name: 'x' }).click();
  await page.getByRole('textbox', { name: 'x' }).fill('123456789');
  await page.getByRole('button', { name: 'Log xx' }).click();
});