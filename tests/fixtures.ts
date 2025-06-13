import { test as baseTest } from '@playwright/test';
import { Amazon } from '../Pages/AmazonPage';

// Define a custom fixture: loginPage
type MyFixtures = {
  amazonPage: Amazon;
};

export const test = baseTest.extend<MyFixtures>({
  amazonPage: async ({ page }, use) => {
    const amazonObj = new Amazon(page);
    await use(amazonObj);
  },
});
