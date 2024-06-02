import { Page } from "@playwright/test";
import { HelperBase } from "../../helper/helperBase";

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

    /**
     * Wait for About page element to be visible
     * @returns true or false
     */
    public async isAboutPageDisplayed() {
        await this.aboutPageValidation.waitFor({state: 'attached'})
        return await this.aboutPageValidation.isVisible()
    }

    /**
     * Enters First Name
     */
    async enterFirstName(firstName: string){
        await this.firstname.fill(`${firstName}`)
    }

    /**
     * Enters Last Name
     */
    async enterLastName(lastName: string){
        await this.lastname.fill(`${lastName}`)
    }

    /**
     * Enters birthdate
     */
    async enterBirthDate(birthDate: string){
        await this.birthdate.fill(`${birthDate}`)
    }

    /**
     * Enters a random email
     */
    async enterRandomEmail(){
        await this.email.fill(`${await this.generateRandomEmail()}`)
    }

    /**
     * Enters new user password
     */
    async enterPassword(password: string){
        await this.password.fill(`${password}`)
    }

    /**
     * Enters Contact Number
     * @param areaCode - Area code prefix to use
     */
    async enterContactNumber(areaCode: string){
        await this.contactNumber.fill(`${areaCode}${await this.generateTenDigitRandomNumbers()}`)
    }

    /**
     * Enters Address
     */
    async enterAddress(address: string){
        await this.address.fill(`${address}`)
    }

    /**
     * Selects Address on the Address Dropdown
     * @param option - Address value to select
     */
    async selectAddress(option: string){
        await this.addressDropdown.getByText(`${option}`).click();
    }

    /**
     * Clicks the 'accept terms' checkbox
     */
    async clickTermsAndPolicyCheckbox(){
        await this.termsAndPolicy.check({force: true});
    }

    /**
     * Clicks 'Continue to payment' button
     */
    async clickContinueToPayment(){
        await this.continueToPayment.click()
    }

    /**
     * Extracts error message for failed payment
     * @returns - all text contents of an elements
     * @type - string
     */
    async extractInvalidPaymentErrorMessage(){
        return (await this.paymentFailedMessage.allTextContents()).toString()
    }

   
}