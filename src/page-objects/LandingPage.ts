import { Locator, Page } from "@playwright/test";
import { HelperBase } from "../helper/HelperBase";

export class LandingPage extends HelperBase{

    private readonly simPlansLinkText: Locator

    constructor(page: Page) {
        super(page)
        this.simPlansLinkText = page.locator("[aria-label='SIM plans'] span")
    }

    async clickSimPlans() {
        await this.simPlansLinkText.click();
    }
}