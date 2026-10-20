import{test, expect} from '@playwright/test'


test.use({storageState:'.auth/CBTAuth.json'});

test("Skip Login Test", async ({page})=>{

    await page.goto('https://test-client-react.dev.cbtsuite.com/');

    await page.waitForTimeout(5000)
})