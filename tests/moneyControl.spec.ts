import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://finance.yahoo.com/');
  
  await expect(page).toHaveTitle("Yahoo Finance - Stock Market Live, Quotes, Business & Finance News");
});

test('chatgpt has title', async ({ page }) => {
  await page.goto('https://chatgpt.com');
  
  await expect(page).toHaveTitle("ChatGPT");
});

const data={
  "expectedTitle": ["Business News Today: Stock and Share Market News"]
}

test('moneycontrol has title', async () => {
  const playwright = require('playwright');
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.moneycontrol.com/');
  try {
    const linktext=await page.locator("span a[title='Moneycontrol']");
    await linktext.click();
  } catch (error) {
    error.message =('link text not found');
  }
  try {
    await page.locator('#wzrk-cancel').click();
  } catch (error) {
    error.message ='Notifications not available';
  }
  await expect(page).toHaveTitle(data.expectedTitle[0]);
  await page.screenshot({ path: 'screenshot.png' });
  await context.close();
  await page.close();
  await browser.close();
});