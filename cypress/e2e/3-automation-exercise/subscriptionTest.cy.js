import filterTests from "../../support/filterTests";
import LandingPage  from '../../support/page_object/Landing.page'
import Utilities from "../../support/Utilities";

const allure = Cypress.Allure.reporter.getInterface();


filterTests(['regression', 'subscription'], function() {
    allure.feature('Subscription functionality')
    describe('Testing subscription functionality from homepage and cart page', function() {
        const utilities = new Utilities();
        const landingPage = new LandingPage();
        
        let cartPage;

        beforeEach('Visit Automation Exercise Webpage', function() {
            cy.visit("https://automationexercise.com/");

        });
        it('subscription in home page', function() {
            utilities.validate(landingPage.getSubscriptionTitle(), 'have.text', 'Subscription');
            
            utilities.typeInto(landingPage.getSubscriptionInputbox(), 'mail@mail.com')
            landingPage.clickOnSubscribeButton();

            utilities.validate(landingPage.getAlertSubscriptionSuccess(), 'have.text', 'You have been successfully subscribed!')

        });
        it('subscription in cart page', function() {
            cartPage = landingPage.clickOnCartButton();

            utilities.validate(cartPage.getBreadcrumb(), 'have.text', '\n\t\t\t\t  Home\n\t\t\t\t  Shopping Cart\n\t\t\t\t')
            utilities.validate(cartPage.getEmptyCartMessage(), 'have.text', 'Cart is empty! Click here to buy products.')

            utilities.validate(landingPage.getSubscriptionTitle(), 'have.text', 'Subscription');
            
            utilities.typeInto(landingPage.getSubscriptionInputbox(), 'mail@mail.com')
            landingPage.clickOnSubscribeButton();

            utilities.validate(landingPage.getAlertSubscriptionSuccess(), 'have.text', 'You have been successfully subscribed!')

        });

    })

})