import { Given, Then, When } from "@cucumber/cucumber";
import { LoginPage } from "../pageObjects/LoginPage";
import { ProductPage } from "../pageObjects/ProductPage";

Given('I am in Swag labs login page', async function () {
    const loginPage: LoginPage = new LoginPage(this.page);
    await loginPage.browseToLoginPage();
    await loginPage.isLoginPage();
});

When('I login with username {string} and password {string}', async function (string, string2) {
    const loginPage: LoginPage = new LoginPage(this.page);
    await loginPage.login(string, string2);
});

Then('login shoul be {string}', async function (string) {
    if (string === "Successfull" || string === "successful") {
        const productsPage: ProductPage = new ProductPage(this.page);
        await productsPage.isProductPage();
    } else {
        const loginPage: LoginPage = new LoginPage(this.page);
        await loginPage.isLoginPage();
    }
});
