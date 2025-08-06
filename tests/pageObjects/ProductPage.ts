import { Page } from "playwright";
import config from "../config";
import { expect } from "@playwright/test";

class ProductPage {
    page: Page
    productsLogo: string;
    cart: string;

    constructor(page : Page){
        this.page = page;
        this.productsLogo = "Products";
        this.cart = "#shopping_cart_container";
    }
  
    async isProductPage(){
        const locator = this.page.getByText(this.productsLogo);
        await expect(locator).toBeVisible();
    }

    async addToCart(productName: string) {
        const addToCartButton = this.page.locator(`//div[text()='${productName}']/../../following-sibling::div/button[text()='ADD TO CART']`);
        await addToCartButton.click();
    }

    async removeFromCart(productName: string) {
        const addToCartButton = this.page.locator(`//div[text()='${productName}']/../../following-sibling::div/button[text()='REMOVE']`);
        await addToCartButton.click();
    }

    async isCartCountUpdates(countOfProduct: number){
        this.page.locator(`.//div[@id='shopping_cart_container']//span`);
    }
}

export { ProductPage };
