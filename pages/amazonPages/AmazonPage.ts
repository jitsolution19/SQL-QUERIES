// AmazonHomePage.ts
import { Page } from '@playwright/test';

export class Amazon {
    constructor(public page: Page) { }

    async getCatLunchBoxInfo(appurl: string) {
        await this.page.goto(appurl);
        await this.page.waitForSelector('.s-result-item');
        const products = await this.page.locator('.s-result-item[data-asin]').elementHandles();
        for (const product of products) {
            const title = await product.$('h2 span');
            const price = await product.$('.a-price-whole');
            const titleText = title ? await title.innerText() : 'No title';
            const priceText = price ? await price.innerText() : 'No price';
            console.log(`${titleText} - ₹${priceText}`);
        }
    }
}