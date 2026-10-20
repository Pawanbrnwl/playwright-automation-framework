import { test } from '../fixtures/test.fixture';
//import { validUser } from '../../helpers/test-data';


  test('Valid user can login @smoke @regression', async ({ pom }) => {

    await pom.loginPage.open();
    //await pom.loginPage.doLogin(validUser.username, validUser.password);
    await pom.loginPage.doLogin("Admin", "admin123");

    await pom.dashboardPage.assertPageHeader("Dashboard");
    await pom.dashboardPage.assertPageTitle("OrangeHRM");    
  });

  test('Invalid user sees login error @regression', async ({ pom }) => {

     await pom.loginPage.doLogin("Admin", "admin");
    await pom.loginPage.assertLoginError('Invalid credentials');
  });


   test('Valid UserNad and Password are Required feilds @smoke @regression', async ({ pom }) => {

    await pom.loginPage.open();
    await pom.loginPage.clickOnLoginBtn();
    await pom.loginPage.assertRequiredFieldErrorVisible();
  
  });
