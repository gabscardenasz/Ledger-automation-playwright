import { test, expect } from '@playwright/test';

test.describe('/ledger Page – Functional & UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://bugged.nclusion.build/test-session/RrRfG8HdBT/ledger'); 
  });


  test('should add a valid credit entry successfully', async ({ page }) => {
    await page.locator('input[type="date"]').fill('2025-07-17');
    await page.getByRole('textbox', { name: 'Description', exact: true }).click();
    await page.getByRole('textbox', { name: 'Description', exact: true }).fill('entry 1');
    await page.getByPlaceholder('Amount').click();
    await page.getByPlaceholder('Amount').fill('55');
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await expect(page.locator('td', { hasText: 'entry 1' })).toBeVisible();
    await expect(page.locator('td', { hasText: '+€55.00' })).toBeVisible();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0, 500); // scroll down by 500px
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'tests/POC/entryAdded-win32.png' });

  });

  });
