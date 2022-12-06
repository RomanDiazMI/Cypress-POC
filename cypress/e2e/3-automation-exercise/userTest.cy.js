
import filterTests from "../../support/filterTests";
import LandingPage  from '../../support/page_object/Landing.page'
import Utilities from "../../support/Utilities";

const allure = Cypress.Allure.reporter.getInterface();


filterTests(['regression', 'register'], function() {
    allure.feature('Register and delete user')
    describe('user should register to the app, then delete the account', function() {
        const utilities = new Utilities();
        const landingPage = new LandingPage();
        let loginPage;
        let registerPage;
        let accountCreatedPage;
        let accountDeletedPage;

        beforeEach('Visit Automation Exercise Webpage', function() {
            cy.visit("https://automationexercise.com/");

        });
        it('Register user', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeSignupUsername("John Constantine");
            loginPage.typeSignupEmail("mail@mail.com");
            registerPage = loginPage.clickOnSignupButton();

            registerPage.clickGenderRadioButton('#id_gender1');

            utilities.validate(registerPage.getName(),'have.value', "John Constantine");
            utilities.validate(registerPage.getEmail(),'have.value', "mail@mail.com");
            registerPage.typePassword("somepassword123")

            registerPage.setBirthDate("1", "January", "1990");
            registerPage.setBasicInfo("John", "Constantine", "neAT&Tidy");

            registerPage.setAddresInfo("98 Some Address St.", "United States", "Texas", "Austin", "73301")
            registerPage.typeMobileNumber("512-441-400");

            accountCreatedPage = registerPage.clickOnCreateAccountButton();

            utilities.validate(accountCreatedPage.getAccountCreatedTitle(), "have.text", "Account Created!");
            utilities.validate(accountCreatedPage.getAccountCreatedFirstParagraph(), "have.text",
                                             "Congratulations! Your new account has been successfully created!");
            utilities.validate(accountCreatedPage.getAccountCreatedSecondParagraph(), "have.text",
                                             "You can now take advantage of member privileges to enhance your online shopping experience with us.");

            accountCreatedPage.clickOnContinueButton();

            utilities.isElementVisible(landingPage.getLogoutButton());
            utilities.isElementVisible(landingPage.getDeleteAccountButton()); 

        });
        it('Register an existent user', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeSignupUsername("John Constantine");
            loginPage.typeSignupEmail("mail@mail.com");
            loginPage.clickOnSignupButton();

            loginPage.validateExistentEmailErrorMessageText('Email Address already exist!')

        });
        it('Logout user', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeLoginEmail("mail@mail.com");
            loginPage.typeLoginPassword("somepassword123");

            loginPage.clickOnLoginButton();
            landingPage.clickOnLogoutButtonButton();

            cy.url().should("eq","https://automationexercise.com/login");

        })
        it('Login and delete user', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeLoginEmail("mail@mail.com");
            loginPage.typeLoginPassword("somepassword123");

            loginPage.clickOnLoginButton();

            utilities.isElementVisible(landingPage.getLogoutButton());
            utilities.isElementVisible(landingPage.getDeleteAccountButton()); 
            utilities.validate(landingPage.getLoggedInInformation(), 'have.text', ' Logged in as John Constantine')

            accountDeletedPage = landingPage.clickOnDeleteAccountButton();

            utilities.validate(accountDeletedPage.getAccountDeletedTitle(), "have.text", "Account Deleted!");
            utilities.validate(accountDeletedPage.getAccountDeletedFirstParagraph(), "have.text",
                                             "Your account has been permanently deleted!");
            utilities.validate(accountDeletedPage.getAccountDeletedSecondParagraph(), "have.text",
                                             "You can create new account to take advantage of member privileges to enhance your online shopping experience with us.");

            accountDeletedPage.clickOnContinueButton();
            utilities.isElementVisible(landingPage.getLoginButton());

        })
        it('Incorrect login', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeLoginEmail("mail@gmail.com");
            loginPage.typeLoginPassword("invalid");

            loginPage.clickOnLoginButton();

            loginPage.validateIncorrectMailOrPasswordErrorMessageText('Your email or password is incorrect!');

        });

    })

})