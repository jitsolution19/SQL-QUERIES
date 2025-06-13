import { test,expect} from './fixtures';

test('Login using fixture', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('admin', 'password123');
  await expect(loginPage.page).toHaveURL(/dashboard/);
});
