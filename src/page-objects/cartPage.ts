import { Page } from "@playwright/test";
import { HelperBase } from "../helper/HelperBase";

export class CartPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async clickPickNewNumber(){
        await this.page.getByText('pick a new number').first().click()
    }

    async selectSimType(){
        const test = this.page.locator('input[value="USIM"]')
        await test.check({force: true})
    }   

    async clickCheckOutButton() {
        await this.page.getByTestId('product-checkout-button').click()
    }

}