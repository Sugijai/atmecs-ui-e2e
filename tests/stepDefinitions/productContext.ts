import { Given, Then, When } from "@cucumber/cucumber";
import { ProductPage } from "../pageObjects/ProductPage";

When('I add the product {string}', async function (productName) {
    const productPage: ProductPage = new ProductPage(this.page);
    await productPage.addToCart(productName);
  });

When('I remove the product {string}', async function (productName) {
    const productPage: ProductPage = new ProductPage(this.page);
    await productPage.removeFromCart(productName);
  });

Then('I verify cart count should be {string}', async function (countOfProduct) {
    const productPage: ProductPage = new ProductPage(this.page);
    await productPage.isCartCountUpdates(countOfProduct);
  });