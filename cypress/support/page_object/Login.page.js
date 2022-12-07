import RegisterPage  from '../../support/page_object/Register.page'

class LoginPage {
    getSignupUsername(){
        return cy.get('[data-qa="signup-name"]');

    }
    getSignupEmail(){
        return cy.get('[data-qa="signup-email"]');
        
    }
    getExistentEmailErrorMessage(){
        return cy.get('.signup-form > form > p');

    }
    validateExistentEmailErrorMessageText(text){
        this.getExistentEmailErrorMessage().should('be.visible').and('have.text', text);

    }
    getIncorrectMailOrPasswordErrorMessage(){
        return cy.get('.login-form > form > p');

    }
    validateIncorrectMailOrPasswordErrorMessageText(text){
        this.getIncorrectMailOrPasswordErrorMessage().should('be.visible').and('have.text', text);

    }
    clickOnSignupButton(){
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
        return new RegisterPage();
        
    }
    getLoginEmail(){
        return cy.get('[data-qa=login-email');

    }
    getLoginPassword(){
        return cy.get('[data-qa=login-password');

    }
    clickOnLoginButton(){
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        return new RegisterPage();
        
    }

}

export default LoginPage;