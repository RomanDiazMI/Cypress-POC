class Inventory {

    getInventoryPageTitle() {
        return cy.get('.title');
    }

    getInventoryPageTitleLogo() {
        return cy.get('.peek');
    }

}


export default Inventory;