import { test, Browser, Page, chromium, expect } from '@playwright/test';
import { naukriData } from '../../data/naukriData';
import path from 'path';
let browser: Browser;
let page: Page;
test.beforeAll('Setup', async () => {
    console.log('Edge Broswer Setup')
    browser = await chromium.launch({
        headless: false,
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    });
    const context = await browser.newContext();
    page = await context.newPage();
})

test('launch url', async () => {
    await page.goto(naukriData[0].webisteUrl);
    await expect(page).toHaveURL(naukriData[0].webisteUrl);
});

test.afterAll('Closing Edge Browser', async () => {
    console.log('Browser closing');
    await browser.close();
})