import { BeforeAll, Before, After, AfterAll, Status, AfterStep, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { LoginPage } from "./tests/pageObjects/LoginPage";
import config from "./tests/config";

export var browser: Browser;

setDefaultTimeout(300 * 1000);

var browserMode = config.headless;
var page: Page;
var context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({
        args: ["--start-maximized"],
        headless: browserMode
    });
    context = await browser.newContext({ viewport: null });
    page = await context.newPage();
});

AfterAll(async function () {
    await page.close();
    await context.close();
    await browser.close();
})

After(async function (Scenario) {
    if (Scenario.result?.status === Status.FAILED) {
        this.attach(
            await this.page.screenshot({ path: "./screenshots/" + Scenario.pickle.name + ".png" , fullPage: true}),
            "image/png"
        )
    }
});