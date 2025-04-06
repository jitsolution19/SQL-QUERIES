import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://finance.yahoo.com/');
  
  await expect(page).toHaveTitle("Yahoo Finance - Stock Market Live, Quotes, Business & Finance News");
});