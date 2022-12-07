class CartPage {
    getBreadcrumb(){
        return cy.get('.breadcrumb');

    }
    getEmptyCartMessage(){
        return cy.get('.text-center');

    }
    
}

export default CartPage;