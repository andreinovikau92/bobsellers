// @ts-check
import { test, expect } from '@playwright/test';
import HomePage from '../page_objects/homePage';

test.describe('homePage.spec.js', () => {

  test.beforeEach(async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.open();
  });

  test('Verify the Create an ad! button is visible', async ({ page }) => {

    const homePage = new HomePage(page);
  
    await expect(homePage.createAdBtn).toHaveText('Create an ad!');
  });

});