import { test, expect } from '@playwright/test';
import { PageManager } from '../../pages/page-manager';

test('login and save state', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("/")
    const pom = new PageManager(page);
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;

    if (!username || !password) {
        throw new Error('Username and password environment variables are not set.');
    }

    await pom.loginPage.doLogin(username, password);
    await page.waitForURL(/dashboard/);

    await context.storageState({ path: '.auth/user.json' });
});