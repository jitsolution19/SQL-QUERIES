import { test, expect } from '@playwright/test';
import { page } from './base'; // Assuming 'base.spec' is a valid file path

const inputdata = [
    {
        websiteUrl: 'https://playwright.dev/',
        title: 'Fast and reliable end-to-end testing for modern web apps | Playwright',
      },
      {
        websiteUrl: 'https://playwright.dev/',
        title: 'Fast and reliable end-to-end testing for modern web apps | Playwright',
      },
];
test.describe('Verify Title of Website', () => {
    inputdata.forEach((data, index) => {
      test(`Verify Title of Website [${index + 1}]`, async () => {
        await page.goto(data.websiteUrl);
        await expect(page).toHaveTitle(data.title);
        await page.screenshot({ path: 'screenshot.png' });
      });
    });
  });

  test('should have correct favicon', async () => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  });
