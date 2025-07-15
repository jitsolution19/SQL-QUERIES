import { Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {} // ✅ must be public or exposed if used in test

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  async navigatetoApplication(){
    await this.page.goto('https://www.screener.in/company/ARTEMISMED/consolidated/');
    const StockdataFieldName =await this.page.locator('#top-ratios li span.name').all();
    const StockdataValue =await this.page.locator('#top-ratios li span.nowrap').all();
    for (let i = 0; i < StockdataFieldName.length; i++) {
      const fieldName = await StockdataFieldName[i].innerText();
      const fieldValue = await StockdataValue[i].innerText();
      console.log(fieldName, '||', fieldValue);
    }
  }
}
