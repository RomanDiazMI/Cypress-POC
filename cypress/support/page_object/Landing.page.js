
import LoginPage  from '../../support/page_object/Login.page'
import AccountDeletedPage from './AccountDeleted.page';
import ContactUsPage from './ContactUs.page';
import ProductsPage from './Products.page';
import CartPage from './Cart.page';
class LandingPage {
    getLoginButton() {
        return cy.get('[href="/login"]');
        
    }
    clickLoginButton() {
       this.getLoginButton().should('be.visible').click();
        return new LoginPage();

    }
    getLogoutButton() {
        return cy.get('[href="/logout"]');

    }
    clickOnLogoutButtonButton(){
        this.getLogoutButton().click();

    }
    getDeleteAccountButton() {
        return cy.get('[href="/delete_account"]');

    }
    clickOnDeleteAccountButton(){
        this.getDeleteAccountButton().click();
        return new AccountDeletedPage();

    }
    getLoggedInInformation(){
        return cy.get(':nth-child(10) > a');
    
    }
    getContactUsButton() {
        return cy.get('[href="/contact_us"]');

    }
    clickOnContactUsButton(){
        this.getContactUsButton().click();
        return new ContactUsPage();

    }
    getProductsButton() {
        return cy.get('[href="/products"]');

    }
    clickOnProductsButton(){
        this.getProductsButton().click();
        return new ProductsPage();

    }
    getCartButton(){
        return cy.get('[href="/view_cart"]').first();

    }
    clickOnCartButton(){
        this.getCartButton().click();
        return new CartPage();

    }
    getSubscriptionTitle(){
        return cy.get('.single-widget > h2');

    }
    getSubscriptionInputbox(){
        return cy.get('#susbscribe_email');

    }
    clickOnSubscribeButton(){
        cy.get('#subscribe').click();

    }
    getAlertSubscriptionSuccess(){
        return cy.get('.alert-success');

    }

}

export default LandingPage;