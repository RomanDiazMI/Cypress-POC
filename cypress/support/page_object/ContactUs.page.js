class ContactUsPage {
    validateGetInTouchTitle(text){
        cy.get('div.contact-form > .title').should('be.visible').and('have.text', text);

    }
    typeName(name){
        cy.get(':nth-child(2) > .form-control').type(name);

    }
    typeEmail(email){
        cy.get(':nth-child(3) > .form-control').type(email);

    }
    typeSubject(subject){
        cy.get(':nth-child(4) > .form-control').type(subject);

    }
    typeMessage(message){
        cy.get('#message').type(message);

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