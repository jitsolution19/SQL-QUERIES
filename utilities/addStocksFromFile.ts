import { Page } from '@playwright/test';
type StockInput = {
    ShareName: string;
    mktCap: string;
    high52Wk: string;
    low52Wk: string;
    basePrice: string;
  };
  
  export const createNewStock = (input: StockInput, timestamp: string) => {
    return {
      ShareName: input.ShareName,
      "Mkt cap": input.mktCap,
      "52-wk high": input.high52Wk,
      "52-wk low": input.low52Wk,
      PriceTrend: [
        {
          timestamp: timestamp,
          price: input.basePrice
        }
      ]
    };
  };

  
export const fetchStockFromWebsite = async (page:Page,url: string) => {
  await page.goto(url);
    const ShareName = await page.locator('h1.h2.shrink-text').innerText();
    const mktCap = await page.locator('#top-ratios li:nth-child(1) span.nowrap').innerText();
    const high52Wk = await page.locator('#top-ratios li:nth-child(3) span.nowrap span:nth-child(1)').innerText();
    const low52Wk = await page.locator('#top-ratios li:nth-child(3) span.nowrap span:nth-child(2)').innerText();
    const priceText = await page.locator('#top-ratios li:nth-child(2) span.nowrap').innerText();
  
    return {
      ShareName: ShareName?.trim() || '',
      mktCap: mktCap?.trim() || '',
      high52Wk: high52Wk?.trim() || '',
      low52Wk: low52Wk?.trim() || '',
      basePrice: priceText?.trim()||''
    };
  };