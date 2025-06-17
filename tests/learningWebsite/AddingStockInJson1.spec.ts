import { test, expect } from '../../fixtures/loginfixtures';
import { readFileSync, writeFileSync } from 'fs';
import{getFormattedDate} from '../../utilities/formattedDate';
import { UpdatingPriceTrend,addingNewStock,updateSpecificSharePrice } from '../../utilities/JsonFileHandling';
import{fetchStockFromWebsite,createNewStock} from '../../utilities/addStocksFromFile';

test('Adding [BECTORFOOD,BHARATFORG,CHAMBLFERT,CHEMCON,COCHINSHIP] Stock from Website into Json file', async ({ loginPage }) => {
 let stockNames:String[]=['BECTORFOOD','BHARATFORG','CHAMBLFERT','CHEMCON','COCHINSHIP'];
 for(const stock of stockNames ){
  const ApplicationUrl = 'https://www.screener.in/company/'+stock+'/consolidated/';
  console.log('Capturing Stock ',stock);
  const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
  const timestamp = getFormattedDate();
  const newStock = createNewStock(stockData, timestamp);
  addingNewStock(newStock);
 }
});

test('Adding [DEEPAKFERT,DYCL,EPIGRAL,EQUITASBNK,ETERNAL] Stock from Website into Json file', async ({ loginPage }) => {
  let stockNames:String[]=['DEEPAKFERT','DYCL','EPIGRAL','EQUITASBNK','ETERNAL'];
  for(const stock of stockNames ){
   const ApplicationUrl = 'https://www.screener.in/company/'+stock+'/consolidated/';
   console.log('Capturing Stock ',stock);
   const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
   const timestamp = getFormattedDate();
   const newStock = createNewStock(stockData, timestamp);
   addingNewStock(newStock);
  }
 });

 
test('Adding [FSL,GFLLIMITED,GMRAIRPORT,GOLDCASE,HARSHA,HCLTECH,IDEA] Stock from Website into Json file', async ({ loginPage }) => {
  let stockNames:String[]=['FSL','GFLLIMITED','GMRAIRPORT','GOLDCASE','HARSHA','HCLTECH','IDEA'];
  for(const stock of stockNames ){
   const ApplicationUrl = 'https://www.screener.in/company/'+stock+'/consolidated/';
   console.log('Capturing Stock ',stock);
   const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
   const timestamp = getFormattedDate();
   const newStock = createNewStock(stockData, timestamp);
   addingNewStock(newStock);
  }
 });

 test('Adding [IGL,INTELLECT,IRCTC,IRFC,IXIGO,JIOFIN] Stock from Website into Json file', async ({ loginPage }) => {
  let stockNames:String[]=['IGL','INTELLECT','IRCTC','IRFC','IXIGO','JIOFIN'];
  for(const stock of stockNames ){
   const ApplicationUrl = 'https://www.screener.in/company/'+stock+'/consolidated/';
   console.log('Capturing Stock ',stock);
   const stockData = await fetchStockFromWebsite(loginPage.page,ApplicationUrl);
   const timestamp = getFormattedDate();
   const newStock = createNewStock(stockData, timestamp);
   addingNewStock(newStock);
  }
 });