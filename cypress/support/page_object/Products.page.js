import ProductDetailsPage from "./ProductDetails.page";

class ProductsPage {
    getProductList(){
        return cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
    
    }
    getProductPageTitle(){
        return cy.get('.title');

    }
    getSearchInput(){
        return cy.get('#search_product');
    
    }
    typeInSearchInput(product){
        this.getSearchInput().type(product);

    }
    clickOnSubmitSearchButton(){
        cy.get('#submit_search').click();

    }
    getProductPrice(){
        return cy.get('.productinfo > h2');

    }
    getProductName(){
        return cy.get('.productinfo > p');

    }
    getAddToCartButton(){
        return cy.get('.productinfo > .btn');

    }
    getViewProductButton(){
        return cy.get('.choose > .nav > li > a');
    }
    clickOnViewProductButton(){
        this.getViewProductButton().click();
        return new ProductDetailsPage();

    }

}

export default ProductsPage;