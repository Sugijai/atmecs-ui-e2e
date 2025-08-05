import { Page } from "playwright";
import config from "../config";
import { expect } from "@playwright/test";

class LoginPage {
    page: Page
    username: string;
    password: string;
    loginButton: string;

    constructor(page : Page){
        this.username ="#user-name";
        this.password = "#password";
        this.loginButton = "#login-button";
    }

    async browseToLoginPage(){
        await this.page.goto(`${config.baseUrl}`);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);

    }
    
}

export { LoginPage };