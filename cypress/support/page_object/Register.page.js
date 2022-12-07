import AccountCreatedPage  from '../../support/page_object/AccountCreated.page'
import Utilities from '../Utilities';
const utilities = new Utilities();
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
        utilities.selectFromLOV(this.getDays(), day);
        utilities.selectFromLOV(this.getMonth(), month);
        utilities.selectFromLOV(this.getYear(), year);

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
        utilities.typeInto(this.getFirstName(), name);
        utilities.typeInto(this.getLastname(), lastname);
        utilities.typeInto(this.getCompany(), company);

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
        utilities.typeInto(this.getAddress(), address);
        utilities.selectFromLOV(this.getCountry(), country);
        utilities.typeInto(this.getState(), state);
        utilities.typeInto(this.getCity(), city);
        utilities.typeInto(this.getZipCode(), zipCode);

    }
    setCompleteAddresInfo(address, adress2, country, state, city, zipCode){
        utilities.typeInto(this.getAddress(), address);
        utilities.typeInto(this.getAddressTwo(), adress2);
        utilities.selectFromLOV(this.getCountry(), country);
        utilities.typeInto(this.getState(), state);
        utilities.typeInto(this.getCity(), city);

    }
    getMobileNumber(){
        return cy.get('#mobile_number');

    }
    clickOnCreateAccountButton(){
        cy.get('[data-qa="create-account"]').click();
        return new AccountCreatedPage();

    }

}

export default RegisterPage;