class utilities {
    getTextFromElement(element){
        return element.invoke('text');

    }
    validate(element, whatToValidate, expectedValue){
        element.should(whatToValidate, expectedValue);

    }
    isElementVisible(element){
        element.should('be.visible');

    }
    isEqualTo(element, expectedValue){
        element.should('eq', expectedValue);
    
    }
    typeInto(element, text){
        element.type(text);

    }
    selectFromLOV(element, selection){
        element.select(selection);

    }
    
}

export default utilities;