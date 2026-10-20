import {test} from '@playwright/test'

test("Child Window", async({page})=>{

    page.goto('https://playground.bondaracademy.com/pages/modal-overlays/window');

    const childpagePromise = page.waitForEvent('popup');
    await page.getByRole('button', {name: 'Open homepage in a new tab'}).click();
    const childpage = await childpagePromise;

    await childpage.waitForLoadState();
    console.log(await childpage.title());
})