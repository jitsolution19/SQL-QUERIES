import { test, chromium, Browser, Page, expect } from '@playwright/test';
import { Amazon } from '../Pages/AmazonPage';
test('Get Link', async ({ page }) => {
  await page.goto('https://www.amazon.in/s?k=cat+lunch+box&ref=nb_sb_noss');
  await page.waitForSelector('.s-result-item');
  const products = await page.locator('.s-result-item[data-asin]').elementHandles();
  for (const product of products) {
    const title = await product.$('h2 span');
    const price = await product.$('.a-price-whole');
    const titleText = title ? await title.innerText() : 'No title';
    const priceText = price ? await price.innerText() : 'No price';
    console.log(`${titleText} - ₹${priceText}`);
  }
});
let browser: Browser;
let page: Page;
test("Example of POM", async ({ page }) => {
  const amazonObj = new Amazon(page);
  await amazonObj.getCatLunchBoxInfo();
})
test.beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  console.log('Closing manual browser');
  await browser.close(); // ✅ manually close the browser
})