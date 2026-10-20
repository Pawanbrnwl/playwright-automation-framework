import { test } from '../fixtures/test.fixture';
//import { validUser } from '../../helpers/test-data';


  test('Smoke Test Application loading', async ({ pom }) => {

    await pom.loginPage.open();
    await pom.loginPage.assertPageTitle("OrangeHRM");    
  });