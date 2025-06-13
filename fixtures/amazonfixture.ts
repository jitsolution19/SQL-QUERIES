import { test as baseTest } from '@playwright/test';
import { Amazon } from '../pages/AmazonPage';
type MyFixtures = {
  amazonPage: Amazon;
};

export const test = baseTest.extend<MyFixtures>({
  amazonPage: async ({ page }, use) => {
    const login = new Amazon(page);
    await use(login);
  },
});