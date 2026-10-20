import { test } from "@playwright/test";

test("download file", async ({page})=>{

    page.goto("https://playground.bondaracademy.com/pages/extra-components/pdf-download");

    const downloadPromis = page.waitForEvent('download');

    await page.getByRole('button', {name:'Download PDF'}).click();
    const download = await downloadPromis;
    await download.saveAs('downloads/test-file.pdf')

})