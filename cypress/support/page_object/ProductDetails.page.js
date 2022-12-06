class ProductsDetailsPage {
    getDetailProductName(){
        return cy.get('.product-information > h2');

    }
    getDetailProductPrice(){
        return cy.get(':nth-child(5) > span');
    
    }
}

export default ProductsDetailsPage;