import { Page } from '@playwright/test'

export class HelperBase {

    readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000);
    } 

    async generateRandomEmail() {
        let strValues: string = "abcdefg12345";
        let strEmail:string = "";
        let strTmp: string;

        for (let i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (let j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    }

    async generateTenDigitRandomNumbers(){
        return Math.random().toString().slice(2,10);
    }
}