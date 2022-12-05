
class AccountCreatedPage {
    getAccountCreatedTitle(){
        return cy.get('[data-qa="account-created"]');

    }
    getAccountCreatedFirstParagraph(){
        return cy.get('.col-sm-9 > :nth-child(2)');
        
    }
    getAccountCreatedSecondParagraph(){
        return cy.get('.col-sm-9 > :nth-child(3)');
        
    }
    clickOnContinueButton(){
        cy.get('[data-qa="continue-button"]').click();

    }
    validateValue(element, whatToValidate, expectedValue){
        element.should(whatToValidate, expectedValue);

    }

}

export default AccountCreatedPage;