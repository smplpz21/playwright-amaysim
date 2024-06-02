import { Page } from "@playwright/test";
import { HelperBase } from "../../../helper/helperBase";

export class SimPlansGridPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async selectSimPlan(simPlanType: string, dataSize: string, timeOut = 10000){
        const buyButton = this.page.locator(`//h1[text()="${simPlanType}"]/../..`).filter({hasText: `${dataSize}`}).getByRole('link', {name: 'Buy now'})
        await buyButton.scrollIntoViewIfNeeded({timeout: timeOut})
        await buyButton.click()
    }
}