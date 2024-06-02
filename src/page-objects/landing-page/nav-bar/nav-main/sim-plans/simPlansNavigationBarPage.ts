import { HelperBase } from "../../../../../helper/helperBase";
import { Page } from "@playwright/test";

export class SimPlansNavigationBarPage extends HelperBase{

    private readonly simPlansNavLink = this.page.locator("[aria-label='SIM plans'] span")

    constructor(page: Page){
        super(page)
    }

    /**
     * Clicks SIM plan navigation bar link
     */
    async clickSimPlans() {
        await this.simPlansNavLink.click();
    }

    /**
     * Hovers onto SIM Plans navigation bar
     */
    async hoverToSimPlans(){
        await this.simPlansNavLink.hover()
        this.page.pause()
    }

    /**
     * Clicks on SIM plan type on hoverable nav bar
     * @param simPlanType - SIM plan type
     */
    async clickSimPlansOnHover(simPlanType: string) {
        await this.page.getByRole('link',{name: `${simPlanType}`}).click()
    }

    
}