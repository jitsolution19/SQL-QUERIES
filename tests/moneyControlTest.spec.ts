import { test, expect } from '@playwright/test';
import { page } from './base';

const data = {
  "expectedTitle": ["Business News Today: Stock and Share Market News, Economy and Finance News, Sensex, Nifty, Global Market, NSE, BSE Live IPO News"]
}

test('moneycontrol has title', async () => {
  await page.goto('https://www.moneycontrol.com/');
  try {
    const linktext = await page.locator("span a[title='Moneycontrol']");
    await linktext.click();
  } catch (error) {
    error.message = ('link text not found');
  }
  try {
    await page.locator('#wzrk-cancel').click();
  } catch (error) {
    error.message = 'Notifications not available';
  }
  await expect(page).toHaveTitle(data.expectedTitle[0]);
  await page.screenshot({ path: 'screenshot.png' });
});


test('Generate json', async ({ page }) => {
  await page.goto('https://www.moneycontrol.com/markets/indian-indices/');
  const nifty50link = await page.locator(".ntlist li[data-name='NIFTY 50'] a").getAttribute('href');
  if (nifty50link) {
    const url = "https://www.moneycontrol.com" + nifty50link;
    await page.goto(url);
    const datatable: string[][] = [];
    const getdata = await page.locator("#indicesTable[role='grid'] tr").all();
    for (const row of getdata) {
      const cells = await row.locator('td').all();
      const rowdata: string[] = [];
      for (const cell of cells) {
        const text = await cell.innerText();
        rowdata.push(text.trim());
      }
      if (rowdata.length > 0) {
        datatable.push(rowdata);
      }
    }
    console.log(datatable);
  }
});