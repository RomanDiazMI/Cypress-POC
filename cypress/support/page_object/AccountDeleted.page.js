
class AccountDeletedPage {
    getAccountDeletedTitle(){
        return cy.get('[data-qa="account-deleted"]');

    }
    getAccountDeletedFirstParagraph(){
        return cy.get('.col-sm-9 > :nth-child(2)');
        
    }
    getAccountDeletedSecondParagraph(){
        return cy.get('.col-sm-9 > :nth-child(3)');
        
    }
    clickOnContinueButton(){
        cy.get('[data-qa="continue-button"]').click();

    }
    validateValue(element, whatToValidate, expectedValue){
        element.should(whatToValidate, expectedValue);

    }

}

export default AccountDeletedPage;