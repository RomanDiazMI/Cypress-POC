class ContactUsPage {
    validateGetInTouchTitle(text){
        cy.get('div.contact-form > .title').should('be.visible').and('have.text', text);

    }
    getName(){
        return cy.get(':nth-child(2) > .form-control')

    }
    getEmail(){
        return cy.get(':nth-child(3) > .form-control')

    }
    getSubject(){
       return cy.get(':nth-child(4) > .form-control')

    }
    getMessage(){
        return cy.get('#message');

    }
    clickOnSubmitButton(){
        cy.get('[data-qa="submit-button"]').click();

    }
    validateStatusMessage(text){
        cy.get('.status').should('be.visible').and('have.text', text);

    }
    clickOnHomeButton(){
        cy.get('#form-section > .btn').click();

    }
    
}

export default ContactUsPage;