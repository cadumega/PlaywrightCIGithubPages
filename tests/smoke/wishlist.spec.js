import { test, expect } from '@playwright/test';

test('Wishlist', async ({ page }) => {
    await page.goto('https://www.princessauto.com/en/');
    await page.getByRole('link', { name: ' Log In' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('carlos.mega@objectedge.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Log In' }).click();

    console.log("**🔹 Access My Account**");
    await page.getByText('Welcome Shalaka').click();
    await page.getByRole('link', { name: 'My Account' }).click();

    console.log("**🔹 Access Wishlist**");
    await page.getByRole('link', { name: 'My Wish List' }).click();
    await page.getByRole('button', { name: ' Invite Friends' }).click({ timeout: 10000 });
    await page.locator('#SWM-inviteToSpaceCancel').click({ timeout: 10000 });

    console.log("**🔹 Access Wishlist by header icon**");
    await page.getByRole('link', { name: '' }).click({ timeout: 10000 });
    await page.getByTitle('Princess Auto', { exact: true }).click({ timeout: 10000 });
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('heading', { name: 'My Wish List' }).click({ timeout: 10000 });
    await page.getByRole('button', { name: 'Cancel' }).click();
});