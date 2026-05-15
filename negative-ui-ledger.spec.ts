import { test, expect } from '@playwright/test';

test.describe('/ledger Page – Functional & UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://bugged.nclusion.build/test-session/RrRfG8HdBT/ledger'); 
  });


  test('Long UI description affected the UI', async ({ page }) => {
    const longDescription = 'A'.repeat(500);
    await page.locator('input[type="date"]').fill('2025-07-17');
    await page.getByRole('textbox', { name: 'Description', exact: true }).click();
    await page.getByRole('textbox', { name: 'Description', exact: true }).fill(longDescription);
    await page.getByPlaceholder('Amount').click();
    await page.getByPlaceholder('Amount').fill('80');
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await expect(page.locator('td', { hasText: longDescription })).toBeVisible();
    await expect(page.locator('td', { hasText: '+€80.00' })).toBeVisible();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0, 600); // scroll down by 500px
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'tests/POC/brokenUI-win32.png' });

  });

  });