import { Locator, Page } from "@playwright/test";

export class LandingPage {

    readonly page: Page
    readonly simPlansLinkText: Locator

    constructor(page: Page) {
        this.page = page
        this.simPlansLinkText = page.locator("[aria-label='SIM plans'] span")
    }

    async clickSimPlans() {
        await this.simPlansLinkText.click();
    }
}