import{test, expect, BrowserContext, Page, Locator} from '@playwright/test'
//import { link } from 'node:fs';

test("Browser Context", async ({browser})=>{

    const myContext:BrowserContext = await browser.newContext();
    const page:Page = await myContext.newPage();

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //console.log(await page.title());

    await expect(page).toHaveTitle("CURA Healthcare Service");

    const makeAppoinment:Locator = page.getByRole('link',{name:"Make Appointment"});
    await makeAppoinment.click();
    //await expect(makeAppoinment).toBeVisible();
})

test("Login Failed Assertion", async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#btn-make-appointment").click();
    await page.locator("#txt-username").fill("TestUserName");
    await page.locator("#txt-password").fill("dummytext");

    await page.locator("#btn-login").click();
    await expect(page.locator(".text-danger")).toHaveText("Login failed! Please ensure the username and password are valid.");
})

test("Login Successfull Assertion", async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#btn-make-appointment").click();

    const username:string | null = await page.getByPlaceholder("Username").first().textContent();
    const password:string | null = await page.getByPlaceholder("Password").first().textContent();


    await page.locator("#txt-username").fill("John Doe");
    await page.locator("#txt-password").fill("ThisIsNotAPassword");

    await page.locator("#btn-login").click();
    await expect(page.locator("#combo_facility")).toBeVisible();
})