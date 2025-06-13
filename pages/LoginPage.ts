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
}
