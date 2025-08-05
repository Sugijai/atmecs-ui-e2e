import { Page } from "playwright";
import config from "../config";
import { expect } from "@playwright/test";

class ProductPage {
    page: Page
    productsLogo: string;

    constructor(page : Page){
        this.page = page;
        this.productsLogo = "Products";
    }
  
    async isProductPage(){
        const locator = this.page.getByText(this.productsLogo);
        await expect(locator).toBeVisible();
    }

    async addToCart(productName: string) {
        const addToCartButton = this.page.getByRole("button", { name: `Add to cart ${productName}` });
        await addToCartButton.click();
    }
}

export { ProductPage };
