import { test, expect } from '@playwright/test'
import {PageManager} from '../src/PageManager'

test.beforeEach(async({ page })=> {
    await page.goto('https://www.amaysim.com.au/')
})

test.afterEach(async({ page })=> {
    await page.close()
})

test('Test 1', async({ page }) => {
    const pm = new PageManager(page)

    await pm.onLandingPage().clickSimPlans();
})
