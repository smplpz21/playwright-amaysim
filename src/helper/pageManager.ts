import { Page } from "@playwright/test";
import { SimPlansNavigationBarPage } from "../page-objects/landing-page/nav-bar/nav-main/sim-plans/simPlansNavigationBarPage";
import { SimPlansGridPage } from "../page-objects/landing-page/grid-sections/simPlansGridPage";
import { CartPage } from "../page-objects/shopping-cart-page/cartPage";
import { AboutPage } from "../page-objects/shopping-cart-page/aboutPage";
import { PaymentPage } from "../page-objects/shopping-cart-page/paymentPage";

export class PageManager{

    private readonly page: Page
    private readonly simPlansNavigationBarMain: SimPlansNavigationBarPage
    private readonly simPlansGridPage: SimPlansGridPage
    private readonly cartPage: CartPage
    private readonly aboutPage: AboutPage
    private readonly paymentPage: PaymentPage

    constructor(page: Page){
        this.page = page
        this.simPlansNavigationBarMain = new SimPlansNavigationBarPage(this.page)
        this.simPlansGridPage = new SimPlansGridPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.aboutPage = new AboutPage(this.page)
        this.paymentPage = new PaymentPage(this.page)
    }

    onSimPlansNavigationBarMain(){
        return this.simPlansNavigationBarMain
    }

    onSimPlansGrid(){
        return this.simPlansGridPage
    }

    onCart(){
        return this.cartPage
    }
    
    onAbout(){
        return this.aboutPage
    }

    onPayment(){
        return this.paymentPage
    }

}