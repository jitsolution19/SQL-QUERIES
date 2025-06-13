import { test } from '../../fixtures/amazonfixture';

test.describe('Getting Info of the Product', async () => {

  test('Getting Cat Lunch box Info', async ({ amazonPage }) => {
    const appurl = 'https://www.amazon.in/s?k=cat+lunch+box&ref=nb_sb_noss';
    await amazonPage.getCatLunchBoxInfo(appurl);
  });


  test('Getting Dino Lunch box Info', async ({ amazonPage }) => {
    const appurl = 'https://www.amazon.in/s?k=dino+lunch+box&crid=1LJX1PAHGHB74&sprefix=dinolunch+box%2Caps%2C256&ref=nb_sb_noss';
    await amazonPage.getCatLunchBoxInfo(appurl);
  });

  test('Getting Color Pencil for Kids Info', async ({ amazonPage }) => {
    const appurl = 'https://www.amazon.in/s?k=color+pencils+for+kids&crid=MOTI31B4YXXI&sprefix=color+%2Caps%2C341&ref=nb_sb_ss_ts-doa-p_1_6';
    await amazonPage.getCatLunchBoxInfo(appurl);
  });
});