const APP_ADDRESS = "http://localhost:8080/";
  
describe('Test #1 Underweight result', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies underweight person', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "100");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "10");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are underweight');
    });
});

describe('Test #2 Healthy weight result', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies person with healthy weight', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "100");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "20");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You have a healthy weight');
    });
});

describe('Test #3 Overweight result', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies overweighted person', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "100");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "25");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are overweight');
    });
});

describe('Test #4 Obese result', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies obese person', async () => {
        await page.click("input[name=cm]");
        await page.type("input[name=cm]", "100");
        await page.click("input[name=kg]");
        await page.type("input[name=kg]", "50");
        await page.click("input[type=submit]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are obese');
    });
});
 
