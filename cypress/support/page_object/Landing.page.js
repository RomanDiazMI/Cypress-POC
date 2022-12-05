
import LoginPage  from '../../support/page_object/Login.page'
import AccountDeletedPage from './AccountDeleted.page';

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
    getDeleteAccountButton() {
        return cy.get('[href="/delete_account"]');

    }
    clickOnDeleteAccountButton(){
        this.getDeleteAccountButton().click();
        return new AccountDeletedPage();

    }
    isElementVisible(element){
        element.should('be.visible');

    }

}

export default LandingPage;