import { Page } from "@playwright/test";
import { HelperBase } from "../helper/HelperBase";
import { TIMEOUT } from "dns";

export class AboutPage extends HelperBase{

    private readonly firstname = this.page.getByPlaceholder('first name')
    private readonly lastname = this.page.getByPlaceholder('last name')
    private readonly birthdate = this.page.getByPlaceholder('dd/mm/yyyy')
    private readonly email = this.page.locator('input[type="email"][name="email"]')
    private readonly password = this.page.locator('input[type="password"][name="password"]')
    private readonly contactNumber = this.page.locator('input[type="tel"][name="contactNumber"]')
    private readonly address = this.page.getByPlaceholder('e.g 123 George St Sydney NSW 2000')
    private readonly addressDropdown = this.page.locator('ul[role="listbox"]')
    private readonly termsAndPolicy = this.page.locator('input[name="acceptTermsAndConditions"]')
    private readonly continueToPayment = this.page.getByText('continue to payment')
    private readonly paymentFailedMessage = this.page.locator('.css-cqbrkr')
    private readonly aboutPageValidation = this.page.locator(':text-is("already with amaysim?")')
   
    constructor(page: Page){
        super(page)
    }

    public async isAboutPageDisplayed() {
        await this.aboutPageValidation.waitFor({state: 'attached'})
        return await this.aboutPageValidation.isVisible()
    }

    async enterFirstName(firstName: string){
        await this.firstname.fill(`${firstName}`)
    }

    async enterLastName(lastName: string){
        await this.lastname.fill(`${lastName}`)
    }

    async enterBirthDate(birthDate: string){
        await this.birthdate.fill(`${birthDate}`)
    }

    async enterRandomEmail(){
        await this.email.fill(`${await this.generateRandomEmail()}`)
    }

    async enterPassword(password: string){
        await this.password.fill(`${password}`)
    }

    async enterContactNumber(areaCode: string){
        await this.contactNumber.fill(`${areaCode}${await this.generateTenDigitRandomNumbers()}`)
    }

    async enterAddress(address: string){
        await this.address.fill(`${address}`)
    }

    async selectAddress(option: string){
        await this.addressDropdown.getByText(`${option}`).click();
    }

    async clickTermsAndPolicyCheckbox(){
        await this.termsAndPolicy.check({force: true});
    }

    async clickContinueToPayment(){
        await this.continueToPayment.click()
    }

    async isCreditCardPaymentFailedMessageDisplayed(){
        return (await this.paymentFailedMessage.allTextContents()).toString()
    }

   
}