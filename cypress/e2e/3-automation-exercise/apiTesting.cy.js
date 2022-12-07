import filterTests from "../../support/filterTests";
const allure = Cypress.Allure.reporter.getInterface();

filterTests(['regression', 'API'], function() {
    allure.feature('API test')
    describe('Testing subscription functionality from homepage and cart page', function() {
        it.only('subscription in cart page', function() {
            cy.request({
                method: 'GET',
                url:'https://api.publicapis.org/entries'

            }).then(({ body, status}) =>{
                expect(status).to.be.eq(200);
                console.log(body)
                
            })

        });
        
    })

})