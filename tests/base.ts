import { test, expect } from '@playwright/test';

let browser;
let context;
let page

test.beforeAll(async () => {
    const playwright = require('playwright');
    browser = await playwright.chromium.launch();
    context = await browser.newContext();
    page = await context.newPage(); 
  });
  
  test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });

export { browser, context, page };