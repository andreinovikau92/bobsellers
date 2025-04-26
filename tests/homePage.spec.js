// @ts-check
import { test, expect } from '@playwright/test';

test.describe('homePage.spec.js', () => {

  test('Verify the URL is correct', async ({ page }) => {
    await page.goto('/');
  
    await expect(page).toHaveURL('https://www.bobseller.com/');
  });

});