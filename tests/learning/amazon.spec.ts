import { test, expect } from '@playwright/test';

test('Download the Image',async({page})=>{
  
await page.goto('https://www.amazon.in/KELVEE-Tumbler-Airtight-Cocktail-Smoothie/dp/B0DGTBMMVW/ref=ast_sto_dp_puis');
await page.waitForSelector('span#productTitle');
await page.locator("img[src='https://m.media-amazon.com/images/I/61bkHA8n3JL._SX679_.jpg']").click({button:'right'});
});
