import {expect, test} from '@playwright/test'

test("Dialog test", async ({page})=>{

    await page.goto("https://playground.bondaracademy.com/pages/tables/smart-table");

    // 1 Select Row By any visiable Test
    const tableRowByEmail = page.getByRole('row', {name:'twitter@outlook.com'});
    await tableRowByEmail.locator(".nb-edit").click();
    await tableRowByEmail.getByPlaceholder('age').fill("225");
    await tableRowByEmail.locator(".nb-checkmark").click();
    await expect(tableRowByEmail.locator('td').last()).toHaveText('225');

    // 2. select Row by any specific coloum value
    const tableRowById = page.getByRole('row').filter({has: page.getByRole('cell').nth(1).getByText('10')});
    await tableRowById.locator(".nb-edit").click();
    await page.locator('tbody').getByPlaceholder('E-mail').fill("Pawan@test.test");
    await page.locator('tbody').locator(".nb-checkmark").click();
    await expect(tableRowById.locator('td').nth(5)).toHaveText("Pawan@test.test");

    //3 loop through table row
    const ages = ["20", "30", "40", "234"]

    for (const age of ages) {
       await page.getByPlaceholder('age').fill(age); 
       if(age=="234")
       {
        await expect(page.locator('tbody')).toContainText("No data found");
       }
       else{

        await expect(page.locator('tbody tr').first().locator('td').last()).toHaveText(age);
        const allTableRows = await page.locator('tobdy tr').all();
        for (let row of allTableRows) {
            await expect(row.locator('td').last()).toHaveText(age);
        }
       }
    }

})