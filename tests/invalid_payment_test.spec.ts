import { test, expect } from '@playwright/test'
import { PageManager } from '../src/helper/pageManager.ts'
import customerDetails from '../src/test-data/customerDetails.json'
import paymentDetails from '../src/test-data/paymentDetails.json'
import plansDetails from '../src/test-data/planDetails.json'
import ENV from '../src/utilities/Env.ts'

test.beforeEach(async ({ page }) => {
    await page.goto(ENV.URL)
})

test.describe('Declined Credit Card Payment Scenario', async () => {
    test('Invalid Payment Test', async({ page }) => {
        const pm = new PageManager(page)

        // Select and checkout a SIM plan type
        await pm.onSimPlansNavigationBarMain().hoverToSimPlans()
        await pm.onSimPlansNavigationBarMain().clickSimPlansOnHover(plansDetails.sim_plan_on_hover)
        await pm.onSimPlansGrid().selectSimPlan(plansDetails.sim_plan_on_grid, plansDetails.data_plan_size)

        // Select new mobile number and SIM type
        await pm.onCart().clickPickNewNumber()
        await pm.onCart().selectSimType()
        await pm.onCart().clickCheckOutButton()

        // Enter customer details
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

        // Enter and submit payment card details
        await pm.onPayment().enterCardNumber(paymentDetails.cc_number)
        await pm.onPayment().enterExpiryDate(paymentDetails.expiry_date)
        await pm.onPayment().enterSecurityCode(paymentDetails.security_code)
        await pm.onPayment().clickConsentCheckbox()
        await pm.onPayment().clickSubmitButton()

        // Checks and wait for about page to load
        expect(await pm.onAbout().isAboutPageDisplayed()).toBeTruthy()
        // Verify if error message for failed payment is displayed
        expect(await pm.onAbout().extractInvalidPaymentErrorMessage())
            .toEqual(customerDetails.error_message_failed_payment)

    })
})