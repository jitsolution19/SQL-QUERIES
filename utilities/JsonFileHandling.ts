import { readFileSync, writeFileSync } from 'fs';
import{getFormattedDate} from './formattedDate';

export const UpdatingPriceTrend=():void=>{
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
};

export const addingNewStock=(newStock):void=>{
    const filename = 'output_202506141645.json'; // Change as needed
    const rawData = readFileSync(filename, 'utf8');
    const jsonData = JSON.parse(rawData);
    console.log(jsonData);
    jsonData.push(newStock);
    writeFileSync(filename, JSON.stringify(jsonData, null, 2), 'utf8');
};

export const updateSpecificSharePrice = (targetShareName): void => {
    const filename = 'output_202506141645.json';
    const rawData = readFileSync(filename, 'utf8');
    const jsonData = JSON.parse(rawData);
  
    const newTimestamp = getFormattedDate();
    const newPrice = (3000 + Math.random() * 10).toFixed(2);
  
    const share = jsonData.find((s: any) => s.ShareName === targetShareName);
  
    if (share) {
      share.PriceTrend.push({
        timestamp: newTimestamp,
        price: newPrice
      });
  
      writeFileSync(filename, JSON.stringify(jsonData, null, 2), 'utf8');
      console.log(`✅ Updated '${targetShareName}' with new PriceTrend at ${newTimestamp} = ₹${newPrice}`);
    } else {
      console.log(`❌ Share not found: ${targetShareName}`);
    }
  };