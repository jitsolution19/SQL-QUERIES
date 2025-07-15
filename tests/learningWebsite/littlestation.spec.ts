import { test, expect } from '@playwright/test';
import { lsData } from '../../data/littleStation';

test('Little Station', async ({ page }) => {

    await test.step('launch Website Url '+lsData[0].websiteurl, async () => {
        await page.goto(lsData[0].websiteurl);
        await expect(page).toHaveTitle(lsData[0].title);
        console.log(lsData[0].title);
    }
    );

    await test.step('Check for heading', async () => {
        const headings = await page.locator('h1').all();
        for (const heading of headings){
            console.log(await heading.innerText());
        }
    }
    );
    await test.step('Check for footer', async () => {
        const footer = await page.getByText('�� 2024 Little Station. All rights reserved.');
        console.log(await footer.innerText());
    });
});