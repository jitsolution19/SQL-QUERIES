import { test, expect } from '@playwright/test';
import { page } from './base.spec';

const data={
  "expectedTitle": ["Business News Today: Stock and Share Market News, Economy and Finance News, Sensex, Nifty, Global Market, NSE, BSE Live IPO News"]
}

test('moneycontrol has title', async () => {
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
});