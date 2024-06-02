import { Page } from "@playwright/test";
import { HelperBase } from "../../helper/helperBase";

export class CartPage extends HelperBase{

    private readonly pickNewNumber = this.page.getByText('pick a new number')
    private readonly selectSimTypeRadio = this.page.locator('input[value="USIM"]')
    private readonly checkOutButton = this.page.getByTestId('product-checkout-button')

    constructor(page: Page){
        super(page)
    }
    
    /**
     * Clicks 'Pick a New Number' link
     */
    async clickPickNewNumber(){
        await this.pickNewNumber.first().click()
    }

    /**
     * Selects a SIM type
     */
    async selectSimType(){
        await this.selectSimTypeRadio.check({force: true})
    }   

    /**
     * Clicks checkout button
     */
    async clickCheckOutButton() {
        await this.checkOutButton.click()
    }

}