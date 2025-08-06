import { BeforeAll, Before, After, AfterAll, Status, AfterStep, setDefaultTimeout, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { LoginPage } from "./tests/pageObjects/LoginPage";
import config from "./tests/config";

export var browser: Browser;
export var context: BrowserContext;

setDefaultTimeout(300 * 1000);

var browserMode = config.headless;

class CustomWorld {
    page?: Page;
    
    constructor() {
        // Page will be assigned in Before hook
    }
}

setWorldConstructor(CustomWorld);

BeforeAll(async function () {
    browser = await chromium.launch({
        args: ["--start-maximized"],
        headless: browserMode
    });
    context = await browser.newContext({ viewport: null });
});

Before(async function () {
    this.page = await context.newPage();
});

After(async function () {
    if (this.page) {
        await this.page.close();
    }
});

AfterAll(async function () {
    await context.close();
    await browser.close();
})

After(async function (Scenario) {
    if (Scenario.result?.status === Status.FAILED && this.page) {
        try {
            const screenshot = await this.page.screenshot({ fullPage: true });
            this.attach(screenshot, "image/png");
        } catch (error) {
            console.log("Screenshot capture failed:", error);
        }
    }
});

AfterStep(async function (step){
    if(step.pickleStep.text.includes("verify") || step.pickleStep.text.includes("should be")){
        const screenshot = await this.page.screenshot({ fullPage: true });
       // this.attach(screenshot, "image/png");
    }
})
