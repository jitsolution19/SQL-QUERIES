import { test, expect } from '../../fixtures/loginfixtures';
import { readFileSync, writeFileSync } from 'fs';
import{getFormattedDate} from '../../utilities/formattedDate';
import { UpdatingPriceTrend,addingNewStock,updateSpecificSharePrice } from '../../utilities/JsonFileHandling';
import{fetchStockFromWebsite,createNewStock} from '../../utilities/addStocksFromFile';

test('Adding ASTERDM Stock from Website into Json file', async ({ loginPage }) => {
  const ApplicationUrl = 'https://www.screener.in/company/ASTERDM/consolidated/';
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
});

test('Adding AURUM Stock from Website into Json file', async ({ loginPage }) => {
  const ApplicationUrl = 'https://www.screener.in/company/AURUM/consolidated/';
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
});

test('Adding ASAHIINDIA Stock from Website into Json file', async ({ loginPage }) => {
 let stockNames:String[]=['ADSL','AEROFLEX','ARTEMISMED','ASAHIINDIA','ASTERDM','AURUM','AVANTIFEED','BDL'];
 for(const stock of stockNames ){
  const ApplicationUrl = 'https://www.screener.in/company/'+stock+'/consolidated/';
  console.log('Capturing Stock ',stock);
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
 }
});