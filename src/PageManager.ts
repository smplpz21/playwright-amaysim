import { Page } from "@playwright/test";
import { LandingPage } from "./page-objects/LandingPage";

export class PageManager{

    private readonly page: Page
    private readonly landingPage: LandingPage

    constructor(page: Page){
        this.page = page
        this.landingPage = new LandingPage(this.page)
    }

    onLandingPage(){
        return this.landingPage
    }

}