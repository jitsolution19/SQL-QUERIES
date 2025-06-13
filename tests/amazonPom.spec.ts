import {test} from './fixtureLearning/amazonfixture';

test('Getting Cat Lunch box Info',async({amazonPage})=>{
  const appurl ='https://www.amazon.in/s?k=cat+lunch+box&ref=nb_sb_noss';
  await amazonPage.getCatLunchBoxInfo(appurl);
});


test('Getting Dino Lunch box Info',async({amazonPage})=>{
  const appurl ='https://www.amazon.in/s?k=dino+lunch+box&crid=1LJX1PAHGHB74&sprefix=dinolunch+box%2Caps%2C256&ref=nb_sb_noss';
  await amazonPage.getCatLunchBoxInfo(appurl);
});