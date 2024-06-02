import { Page } from "@playwright/test";
import { HelperBase } from "../../helper/helperBase";

export class PaymentPage extends HelperBase {

    private readonly cardNumberFrame = this.page.frameLocator('[title="Secure card number input frame"]')
    private readonly expiryDateFrame = this.page.frameLocator('[title="Secure expiration date input frame"]')
    private readonly securityCodeFrame = this.page.frameLocator('[title="Secure CVC input frame"]')
    private readonly cardNumber = this.cardNumberFrame.locator('input[name="cardnumber"]')
    private readonly expiryDate = this.expiryDateFrame.locator('input[name="exp-date"]') 
    private readonly securityCode = this.securityCodeFrame.locator('input[name="cvc"]')
    private readonly consentCheckbox = this.page.locator('[type="checkbox"][data-id-consent-check]') 
    private readonly submitButton = this.page.getByTestId('submit-button') 
    
    constructor(page: Page){
        super(page)
    }

    async enterCardNumber(cardNumber: string){
        await this.cardNumber.fill(`${cardNumber}`)
    }

    async enterExpiryDate(expiryDate: string){
        await this.expiryDate.fill(`${expiryDate}`)
    }
    
    async enterSecurityCode(cvc: string){
        await this.securityCode.fill(`${cvc}`)
    }

    async clickConsentCheckbox(){
        await this.consentCheckbox.check({force: true})
    }

    async clickSubmitButton(){
        await this.submitButton.click()
    }

}