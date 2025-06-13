import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login); // ✅ make it available in tests
  },
});

export {expect} from '@playwright/test';
