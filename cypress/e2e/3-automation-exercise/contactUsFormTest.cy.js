import filterTests from "../../support/filterTests";
import LandingPage  from '../../support/page_object/Landing.page'

const allure = Cypress.Allure.reporter.getInterface();


filterTests(['regression', 'contact us'], function() {
    allure.feature('Register and delete user')
    describe('user should register to the app, then delete the account', function() {
        const landingPage = new LandingPage();
        let contactUsPage;

        beforeEach('Visit Automation Exercise Webpage', function() {
            cy.visit("https://automationexercise.com/");

        });
        it('Contact Us Form', function() {
            contactUsPage = landingPage.clickOnContactUsButton();
            contactUsPage.validateGetInTouchTitle("Get In Touch");
            
            contactUsPage.typeName('John Constantine');
            contactUsPage.typeEmail('mail@mail.com');
            contactUsPage.typeSubject('testing contact us form');
            contactUsPage.typeMessage('testing message textarea from contact us form');
            
            contactUsPage.clickOnSubmitButton()

            contactUsPage.validateStatusMessage('Success! Your details have been submitted successfully.');
            
            contactUsPage.clickOnHomeButton();
            cy.url().should("eq","https://automationexercise.com/");

        });

    })

})