import { Page } from "playwright";
import { expect } from "@playwright/test";

class CartPage {
    page: Page;
    continueShoppingButton: string;
    checkOutButton: string;
    yourcartLogo: string;

    constructor(page :  Page){
        this.page = page;
        this.checkOutButton = "CHECKOUT";
        this.continueShoppingButton = "Continue Shopping";
        this.yourcartLogo = "Your Cart";
    }

    async isCartsPage(){
        await expect(this.page.getByText(this.yourcartLogo)).toBeVisible();
    }

    async clickCheckout(){
        await this.page.getByText(this.checkOutButton).click();
    }

    async clickContinueShopping(){
        await this.page.getByText(this.continueShoppingButton).click();
    }

    async removeFromCart(productName: string) {
        const addToCartButton = this.page.locator(`//div[text()=${productName}]/../following-sibling::div/button`);
        await addToCartButton.click();
    }
}

export { CartPage };