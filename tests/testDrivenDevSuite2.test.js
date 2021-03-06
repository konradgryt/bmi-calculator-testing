const APP_ADDRESS = "http://localhost:8080/";

describe('Test#1 Male normal weight', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies males with normal weight', async () => {
        await page.click("input[name=sex]");
        await page.type("input[name=sex]", "male");
        await page.click("input[name=waist]");
        await page.type("input[name=waist]", "100");
        await page.click("input[name=hip]");
        await page.type("input[name=hip]", "130");
        await page.click("input[name=second]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You have a normal weight');
    });
});

describe('Test#2 Female normal weight', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies females with normal weight', async () => {
        await page.click("input[name=sex]");
        await page.type("input[name=sex]", "female");
        await page.click("input[name=waist]");
        await page.type("input[name=waist]", "100");
        await page.click("input[name=hip]");
        await page.type("input[name=hip]", "130");
        await page.click("input[name=second]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You have a normal weight');
    });
});

describe('Test#3 Male overweight', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies overweighted males', async () => {
        await page.click("input[name=sex]");
        await page.type("input[name=sex]", "male");
        await page.click("input[name=waist]");
        await page.type("input[name=waist]", "100");
        await page.click("input[name=hip]");
        await page.type("input[name=hip]", "105");
        await page.click("input[name=second]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are overweight');
    });
});

describe('Test#4 Female overweight', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies overweighted females', async () => {
        await page.click("input[name=sex]");
        await page.type("input[name=sex]", "female");
        await page.click("input[name=waist]");
        await page.type("input[name=waist]", "100");
        await page.click("input[name=hip]");
        await page.type("input[name=hip]", "120");
        await page.click("input[name=second]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are overweight');
    });
});

describe('Test#5 Male obese', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies obese males', async () => {
        await page.click("input[name=sex]");
        await page.type("input[name=sex]", "male");
        await page.click("input[name=waist]");
        await page.type("input[name=waist]", "100");
        await page.click("input[name=hip]");
        await page.type("input[name=hip]", "90");
        await page.click("input[name=second]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are obese');
    });
});

describe('Test#6 Female obese', () => {
    beforeAll(async () => {
        await page.goto(APP_ADDRESS);
    });
 
    it('Form works and identifies obese females', async () => {
        await page.click("input[name=sex]");
        await page.type("input[name=sex]", "female");
        await page.click("input[name=waist]");
        await page.type("input[name=waist]", "100");
        await page.click("input[name=hip]");
        await page.type("input[name=hip]", "105");
        await page.click("input[name=second]");
        await page.waitForSelector(".alert-success");
        await expect(page).toMatch('You are obese');
    });
});
