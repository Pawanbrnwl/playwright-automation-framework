import { test } from '../fixtures/test.fixture';

test.beforeEach("Login",async({pom})=>{
 const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;

    if (!username || !password) {
        throw new Error('Username and password environment variables are not set.');
    }

    await pom.loginPage.doLogin(username, password);
})

test("Dashboard Page open after successful login @regression", async ({ pom }) => {
    await pom.dashboardPage.assertPageLoaded();
});


test("Verify widgets are visible @regression", async({pom})=>{
const expectedWidgetsName : string[] = ['Time at Work', 'My Actions','Quick Launch','Buzz Latest Posts']
await pom.dashboardPage.AssertWidgetIsVisible(expectedWidgetsName);

})

