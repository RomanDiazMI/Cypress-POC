import filterTests from "../../support/filterTests";
import LandingPage  from '../../support/page_object/Landing.page'
import Utilities from "../../support/Utilities";

const allure = Cypress.Allure.reporter.getInterface();


filterTests(['regression', 'contact us'], function(){
    allure.feature('product test')
    describe('product tests', function() {
        const utilities = new Utilities();
        const landingPage = new LandingPage();
        let productsPage;
        let productDetailsPage;
        beforeEach('Visit Automation Exercise Webpage', function() {
            cy.visit("https://automationexercise.com/");

        });
        it('product list not empty', function() {
            productsPage = landingPage.clickOnProductsButton();

            utilities.validate(productsPage.getProductPageTitle(),'have.text', 'All Products');
            productsPage.getProductList();

        });
        it('Search product and product details', function() {
            productsPage = landingPage.clickOnProductsButton();

            productsPage.typeInSearchInput('Green Side Placket');
            productsPage.clickOnSubmitSearchButton();

            utilities.validate(productsPage.getProductPageTitle(),'have.text', 'Searched Products');

            utilities.validate(productsPage.getProductName(), 'have.text', 'Green Side Placket Detail T-Shirt');
            utilities.validate(productsPage.getProductPrice(), 'have.text', 'Rs. 1000');

            utilities.isElementVisible(productsPage.getAddToCartButton());

            productDetailsPage = productsPage.clickOnViewProductButton();

            utilities.validate(productDetailsPage.getDetailProductName(), 'have.text', 'Green Side Placket Detail T-Shirt');
            utilities.validate(productDetailsPage.getDetailProductPrice(), 'have.text', 'Rs. 1000');

        });

    })

})