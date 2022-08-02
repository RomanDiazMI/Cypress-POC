import {
    default as Login
} from "../support/page_object/Login";
import Inventory from "../support/page_object/Inventory";
import filterTests from "../support/filterTests";

const allure = Cypress.Allure.reporter.getInterface();

filterTests(['regression', 'login'], () => {
    allure.feature('Login 1')
    describe('EXAMPLE INITIAL TEST', () => {

        const login = new Login();
        const inventory = new Inventory();

        beforeEach('Visit SauceDemo webpage', () => {
            cy.visit(Cypress.env('URL'));
        })

        it('Login and check home page', () => {
            login.getLoginUsernameInput().should('be.visible').type(Cypress.env('USERNAME'));
            login.getLoginPasswordInput().should('be.visible').type(Cypress.env('PASSWORD'));
            login.getLoginButton().should('be.visible').click();

            inventory.getInventoryPageTitle().should('be.visible')
            inventory.getInventoryPageTitleLogo().should('be.visible')

            cy.url().should('eq', Cypress.env('URL') + Cypress.env('INVENTORY_URL'))



        })

    })
})