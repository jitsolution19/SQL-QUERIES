import { test, expect } from '@playwright/test';
import {naukriData} from '../data/naukriData';

test('launch url', async ({page}) => {
    await page.goto(naukriData[0].webisteUrl);
    await expect(page).toHaveURL(naukriData[0].webisteUrl);
    // await page.
});