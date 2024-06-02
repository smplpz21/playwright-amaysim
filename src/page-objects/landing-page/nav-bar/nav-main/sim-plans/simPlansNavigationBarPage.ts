import { HelperBase } from "../../../../../helper/helperBase";
import { Locator, Page } from "@playwright/test";

export class SimPlansNavigationBarPage extends HelperBase{

    private readonly simPlansNavLink: Locator

    constructor(page: Page){
        super(page)
        this.simPlansNavLink = page.locator("[aria-label='SIM plans'] span")
    }

    async clickSimPlans() {
        await this.simPlansNavLink.click();
    }

    async hoverToSimPlans(){
        await this.simPlansNavLink.hover()
        this.page.pause()
    }

    async clickSimPlansOnHover(simPlanType: string) {
        await this.page.getByRole('link',{name: `${simPlanType}`}).click()
    }

    
}