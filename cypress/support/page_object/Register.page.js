import AccountCreatedPage  from '../../support/page_object/AccountCreated.page'

class RegisterPage {
    getGenderRadioButton(genderId){
        return cy.get(genderId);
    }
    clickGenderRadioButton(genderId) {
        this.getGenderRadioButton(genderId).should('be.visible').click();

    }
    getName(){
        return cy.get('#name');

    }
    getEmail(){
        return cy.get('#email');

    }
    getPassword(){
        return cy.get('#password');

    }
    typePassword(password){
        this.getPassword().type(password);

    }
    getDays(){
        return cy.get('#days');

    }
    getMonth(){
        return cy.get('#months');

    }
    getYear(){
        return cy.get('#years');

    }
    setBirthDate(day, month, year){
        this.getDays().select(day);
        this.getMonth().select(month);
        this.getYear().select(year);

    }
    getFirstName(){
        return cy.get('#first_name');

    }
    getLastname(){
        return cy.get('#last_name');

    }
    getCompany(){
        return cy.get('#company');

    }
    setBasicInfo(name, lastname, company){
        this.getFirstName().type(name);
        this.getLastname().type(lastname);
        this.getCompany().type(company);

    }
    getAddress(){
        return cy.get('#address1');

    }
    getAddressTwo(){
        return cy.get('#address2');

    }
    getCountry(){
        return cy.get('#country');

    }
    getState(){
        return cy.get('#state');

    }
    getCity(){
        return cy.get('#city');

    }
    getZipCode(){
        return cy.get('#zipcode');

    }
    setAddresInfo(address, country, state, city, zipCode){
        this.getAddress().type(address);
        this.getCountry().select(country);
        this.getState().type(state);
        this.getCity().type(city);
        this.getZipCode().type(zipCode);

    }
    setCompleteAddresInfo(address, adress2, country, state, city, zipCode){
        this.getAddress().type(address);
        this.getAddressTwo(adress2);
        this.getCountry().select(country);
        this.getState().type(state);
        this.getCity().type(city);
        this.getZipCode().type(zipCode);

    }
    getMobileNumber(){
        return cy.get('#mobile_number');

    }
    typeMobileNumber(mobileNumber){
        this.getMobileNumber().type(mobileNumber);

    }
    clickOnCreateAccountButton(){
        cy.get('[data-qa="create-account"]').click();
        return new AccountCreatedPage();

    }
    checkValue(element, expectedValue){
        element.should("have.value", expectedValue);

    }

}

export default RegisterPage;