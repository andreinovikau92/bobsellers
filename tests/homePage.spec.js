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

  test('Verify Login In button is visible on the Home page', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.loginInBtn).toHaveText('Log in');
  });

  test('Verify a New radio button is checked', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.checkNewRadionButton();
    await expect(homePage.newRadioButton).toBeChecked();
  });

  test('Verify a Used radio button is checked', async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.checkNewRadionButton();
    await homePage.checkUsedRadioButton();

    await expect(homePage.usedRadioButton).toBeChecked();
  });

  test('Verify the Search bar is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.searchField).toBeVisible();
  });
});