import RegisterPage  from '../../support/page_object/Register.page'

class LoginPage {
    getSignupUsername(){
        return cy.get('[data-qa="signup-name"]');

    }
    typeSignupUsername(username) {
        this.getSignupUsername().should('be.visible').type(username);

    }
    getSignupEmail(){
        return cy.get('[data-qa="signup-email"]');
        
    }
    typeSignupEmail(email) {
        this.getSignupEmail().should('be.visible').type(email);

    }
    getExistentEmailErrorMessage(){
        return cy.get('.signup-form > form > p');

    }
    validateExistentEmailErrorMessageText(text){
        this.getExistentEmailErrorMessage().should('be.visible').and('have.text', text);

    }
    clickOnSignupButton(){
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
        return new RegisterPage();
        
    }
    getLoginEmail(){
        return cy.get('[data-qa=login-email');

    }
    typeLoginEmail(email) {
        this.getLoginEmail().should('be.visible').type(email);

    }
    getLoginPassword(){
        return cy.get('[data-qa=login-password');

    }
    typeLoginPassword(password) {
        this.getLoginPassword().should('be.visible').type(password);

    }
    clickOnLoginButton(){
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        return new RegisterPage();
        
    }

}

export default LoginPage;