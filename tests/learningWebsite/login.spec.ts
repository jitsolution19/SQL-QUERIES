import { test, expect } from '../../fixtures/loginfixtures';
import { readFileSync, writeFileSync } from 'fs';
import{getFormattedDate} from '../../utilities/formattedDate';
import { UpdatingPriceTrend,addingNewStock,updateSpecificSharePrice } from '../../utilities/JsonFileHandling';
import{fetchStockFromWebsite,createNewStock} from '../../utilities/addStocksFromFile';

test('Login using fixture', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('admin', 'password123');
  await expect(loginPage.page).toHaveURL(/dashboard/);
});


test('readingwritingJsonFile', async ({ loginPage }) => {
  const filename = 'output_202506141645.json'; // Change as needed
  const rawData = readFileSync(filename, 'utf8');
  const jsonData = JSON.parse(rawData);
  console.log(jsonData);
  const newTimestamp = getFormattedDate();
  const newPrice = (3000 + Math.random() * 10).toFixed(2);
  jsonData.forEach((share: any) => {
    share.PriceTrend.push({
      timestamp: newTimestamp,
      price: newPrice
    });
  });

  writeFileSync(filename, JSON.stringify(jsonData, null, 2), 'utf8');

  console.log(`Updated JSON file: ${filename}`);

  console.log(`Added new PriceTrend at ${newTimestamp} = ₹${newPrice}`);
});

test('Date Setting', async ({ loginPage }) => {
  const formattedDate = getFormattedDate();
  console.log(formattedDate);
});



test('writingFile', async ({ loginPage }) => {
  UpdatingPriceTrend();
});

const newStock = {
  ShareName: 'Tata Consultancy Services Ltd',
  "Mkt cap": '14.2LCr',
  "52-wk high": '4,290.00',
  "52-wk low": '3,210.55',
  PriceTrend: [
    {
      timestamp: 202506151212,
      price: (3800 + Math.random() * 10).toFixed(2)
    }
  ]
};

test('Adding New Stock In Json', async ({ loginPage }) => {
  addingNewStock(newStock);
});

const targetShareName ='Tata Consultancy Services Ltd';

test('updating Price Trend of Specific Share in Json File', async ({ loginPage }) => {
  updateSpecificSharePrice(targetShareName);
});

test('Adding New Stock from Website into Json file', async ({ loginPage }) => {
  const ApplicationUrl = 'https://www.moneycontrol.com/';
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
});



test('Adding Artimis Stock from Website into Json file', async ({ loginPage }) => {
  const ApplicationUrl = 'https://www.screener.in/company/ARTEMISMED/consolidated/';
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
});

test('Adding ASAHIINDIA Stock from Website into Json file', async ({ loginPage }) => {
  const ApplicationUrl = 'https://www.screener.in/company/ASAHIINDIA/consolidated/';
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
});


test('Capture Data', async ({ loginPage }) => {
  await loginPage.navigatetoApplication();
});