import { test, expect } from '@playwright/test';

test.describe('/ledger Page – Functional & UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://bugged.nclusion.build/test-session/RrRfG8HdBT/ledger'); 
  });

  test('show validation error', async ({ page }) => {
    await page.locator('input[type="date"]').fill('2025-07-17');
    await page.getByRole('textbox', { name: 'Description', exact: true }).click();
    await page.getByRole('textbox', { name: 'Description', exact: true }).fill('');
    await page.getByPlaceholder('Amount').click();
    await page.getByPlaceholder('Amount').fill('77');
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    const descriptionInput = page.getByPlaceholder('Description');
    await expect(descriptionInput).toBeVisible();
    await expect(descriptionInput).toHaveJSProperty('validationMessage', 'Please fill out this field.');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'tests/POC/descriptionError-win32.png' });

  });

  });
