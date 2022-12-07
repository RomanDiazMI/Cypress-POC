import filterTests from "../../support/filterTests";
import LandingPage  from '../../support/page_object/Landing.page'
import Utilities from "../../support/Utilities";

const allure = Cypress.Allure.reporter.getInterface();


filterTests(['regression', 'contact us'], function() {
    allure.feature('Contact us form')
    describe('contact us form testing', function() {
        const utilities = new Utilities()
        const landingPage = new LandingPage();
        let contactUsPage;

        beforeEach('Visit Automation Exercise Webpage', function() {
            cy.visit("https://automationexercise.com/");

        });
        it('Contact Us Form', function() {
            contactUsPage = landingPage.clickOnContactUsButton();
            contactUsPage.validateGetInTouchTitle("Get In Touch");
            
            utilities.typeInto(contactUsPage.getName(), 'John Constantine');
            utilities.typeInto(contactUsPage.getEmail(), 'mail@mail.com');
            utilities.typeInto(contactUsPage.getSubject(), 'testing contact us form');
            utilities.typeInto(contactUsPage.getMessage(), 'testing message textarea from contact us form');
            
            contactUsPage.clickOnSubmitButton();

            contactUsPage.validateStatusMessage('Success! Your details have been submitted successfully.');
            
            contactUsPage.clickOnHomeButton();
            cy.url().should("eq","https://automationexercise.com/");

        });

    })

})