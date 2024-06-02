import { test, expect } from '@playwright/test'
import { PageManager } from '../src/helper/pageManager'
import customerDetails from '../src/test-data/customerDetails.json'
import paymentDetails from '../src/test-data/paymentDetails.json'
import plansDetails from '../src/test-data/planDetails.json'
import ENV from '../src/utilities/Env.ts'

test.beforeEach(async ({ page }) => {
    let url: string = ENV.URL ?? "/"
    await page.goto(url)
})

test.describe('Declined Credit Card Payment Scenario', async () => {
    test('Invalid Payment Test', async({ page }) => {
        const pm = new PageManager(page)

        await pm.onSimPlansNavigationBarMain().hoverToSimPlans()
        await pm.onSimPlansNavigationBarMain().clickSimPlansOnHover(plansDetails.sim_plan_on_hover)
        await pm.onSimPlansGrid().selectSimPlan(plansDetails.sim_plan_on_grid, plansDetails.data_plan_size)

        await pm.onCart().clickPickNewNumber()
        await pm.onCart().selectSimType()
        await pm.onCart().clickCheckOutButton()

        await pm.onAbout().enterFirstName(customerDetails.first_name)
        await pm.onAbout().enterLastName(customerDetails.last_name)
        await pm.onAbout().enterBirthDate(customerDetails.birth_date)
        await pm.onAbout().enterRandomEmail()
        await pm.onAbout().enterPassword(customerDetails.password)
        await pm.onAbout().enterContactNumber(customerDetails.contact_area_code)
        await pm.onAbout().enterAddress(customerDetails.address)
        await pm.onAbout().selectAddress(customerDetails.address)
        await pm.onAbout().clickTermsAndPolicyCheckbox()
        await pm.onAbout().clickContinueToPayment()

        await pm.onPayment().enterCardNumber(paymentDetails.cc_number)
        await pm.onPayment().enterExpiryDate(paymentDetails.expiry_date)
        await pm.onPayment().enterSecurityCode(paymentDetails.security_code)
        await pm.onPayment().clickConsentCheckbox()
        await pm.onPayment().clickSubmitButton()

        expect(await pm.onAbout().isAboutPageDisplayed()).toBeTruthy()
        expect(await pm.onAbout().isCreditCardPaymentFailedMessageDisplayed())
            .toEqual(customerDetails.error_message_failed_payment)

    })
})

// test.afterEach(async({ page })=> {
//     await page.close()
// })