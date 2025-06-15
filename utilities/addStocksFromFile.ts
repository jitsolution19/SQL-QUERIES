import { Page } from '@playwright/test';
type StockInput = {
    ShareName: string;
    mktCap: string;
    high52Wk: string;
    low52Wk: string;
    basePrice: number;
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
          price: (input.basePrice + Math.random() * 10).toFixed(2)
        }
      ]
    };
  };

  
export const fetchStockFromWebsite = async (page:Page,url: string) => {
  await page.goto(url);
  
    // Example selectors — you MUST customize based on the site structure
    const ShareName = await page.locator('.stock-name-selector').textContent();
    const mktCap = await page.locator('.market-cap-selector').textContent();
    const high52Wk = await page.locator('.high52-selector').textContent();
    const low52Wk = await page.locator('.low52-selector').textContent();
    const priceText = await page.locator('.price-selector').textContent();
  

  
    return {
      ShareName: ShareName?.trim() || '',
      mktCap: mktCap?.trim() || '',
      high52Wk: high52Wk?.trim() || '',
      low52Wk: low52Wk?.trim() || '',
      basePrice: parseFloat(priceText?.replace(',', '') || '0')
    };
  };