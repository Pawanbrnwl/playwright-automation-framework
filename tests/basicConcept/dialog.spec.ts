import {expect, test} from '@playwright/test'
import { log } from 'node:console';

test("Dialog test", async ({page})=>{

        await page.goto("https://playground.bondaracademy.com/pages/tables/smart-table");
    
        // Select Row By any visiable email
        const tableRowByEmail = page.getByRole('row', {name:'twitter@outlook.com'});

        page.on('dialog', dialog =>{
            console.log(dialog.message());
            dialog.accept();
        })

        await tableRowByEmail.locator(".nb-trash").click();
        await expect(page.getByRole('row', {name:'twitter@outlook.com'})).not.toBeVisible();

})