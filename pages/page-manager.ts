//Create all page object and inilise in constructor so user can access all pages object from pageManager

import { Page } from "@playwright/test";
import { Dashboard } from "./dashboard.page";
import { LoginPage } from "./login.page";


export class PageManager {
    readonly loginPage : LoginPage;
    readonly dashboardPage : Dashboard;

    constructor(page:Page){
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new Dashboard(page);
    }


}