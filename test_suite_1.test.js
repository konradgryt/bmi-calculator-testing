const APP_ADDRESS = "http://localhost:8080/";
 
/*
 * Test to check if the loading of localhost works.
 */

describe('TEST#0 Checking if the side loads', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });

    it('Website should load and display bmi calculator', async () => {
        await expect(page).toMatch('BMI - Rechner');
    });
});
 
/*
 * First test to determine if application works properly with both values positive.
 */
 
describe('TEST#1 Test for two positive values, both in cm and kg', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });

    it('User input cm - positive and kg - positive', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "1");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "1");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert-success");
    });
});

/*
 * Second test to determine if application works properly with both values negative.
 */
 
describe('TEST#2 Test for two negative values, both in cm ang kg', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });

    it('User input cm - negative and kg - negative', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "-1");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "-1");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert");
    });
});

/*
 * Third test to determine if application is working properly when value of cm is positive and value of kg is negative
 */
 
describe('TEST#3 Test for positive value in cm and negative in kg', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });

    it('User input cm - positive and kg - negative', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "1");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "-1");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert");
    });
});
 
/*
 * Fourth test to determine if application is working properly when value of cm is negative and value of  kg is positive
 */
 
describe('TEST#4 Test for negative value in cm and postivie in kg', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });

    it('User input cm - negative and kg - positive', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "-1");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "1");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert-success");
    });
});

/*
 * Fourth test to determine if application is working properly when value of cm is negative and value of  kg is positive
 */
 
describe('TEST#5 Test for empty input fields ', () => {
  beforeAll(async () => {
    await page.goto(APP_ADDRESS);
  });

  it('User preses button', async () => {
        var oldPageString = page;
        page.click("input[type=submit]")
        await page.waitForNavigation();
        await expect(page.toString()).toMatch(oldPageString.toString());
  });
});

/*
 * Fourth test to determine if application is working properly when value of cm is negative and value of  kg is positive
 */
 
describe('TEST#6 Testcase something 2', () => {
  beforeAll(async () => {
    await page.goto(APP_ADDRESS);
  });

  it('Noninteger provided', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "sample"); //nonempty string
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "test"); //nonempty string
        await page.click("input[type=submit]");
  });
});