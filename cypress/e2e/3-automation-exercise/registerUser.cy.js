
import filterTests from "../../support/filterTests";
import LandingPage  from '../../support/page_object/Landing.page'

const allure = Cypress.Allure.reporter.getInterface();


filterTests(['regression', 'register'], function() {
    allure.feature('Register and delete user')
    describe('user should register to the app, then delete the account', function() {
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

            registerPage.checkValue(registerPage.getName(), "John Constantine");
            registerPage.checkValue(registerPage.getEmail(), "mail@mail.com");
            registerPage.typePassword("somepassword123")

            registerPage.setBirthDate("1", "January", "1990");
            registerPage.setBasicInfo("John", "Constantine", "neAT&Tidy");

            registerPage.setAddresInfo("98 Some Address St.", "United States", "Texas", "Austin", "73301")

            registerPage.typeMobileNumber("512-441-400");

            accountCreatedPage = registerPage.clickOnCreateAccountButton();

            accountCreatedPage.validateValue(accountCreatedPage.getAccountCreatedTitle(), "have.text", "Account Created!");
            accountCreatedPage.validateValue(accountCreatedPage.getAccountCreatedFirstParagraph(), "have.text",
                                             "Congratulations! Your new account has been successfully created!");
            accountCreatedPage.validateValue(accountCreatedPage.getAccountCreatedSecondParagraph(), "have.text",
                                             "You can now take advantage of member privileges to enhance your online shopping experience with us.");

            accountCreatedPage.clickOnContinueButton();

            landingPage.isElementVisible(landingPage.getLogoutButton());
            landingPage.isElementVisible(landingPage.getDeleteAccountButton()); 

        });
        it('Register an existent user', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeSignupUsername("John Constantine");
            loginPage.typeSignupEmail("mail@mail.com");
            loginPage.clickOnSignupButton();

            loginPage.validateExistentEmailErrorMessageText('Email Address already exist!')

        });

        it('Login and delete user', function() {
            loginPage = landingPage.clickLoginButton();

            loginPage.typeLoginEmail("mail@mail.com");
            loginPage.typeLoginPassword("somepassword123");

            loginPage.clickOnLoginButton();

            landingPage.isElementVisible(landingPage.getLogoutButton());
            landingPage.isElementVisible(landingPage.getDeleteAccountButton()); 

            accountDeletedPage = landingPage.clickOnDeleteAccountButton();

            accountDeletedPage.validateValue(accountDeletedPage.getAccountDeletedTitle(), "have.text", "Account Deleted!");
            accountDeletedPage.validateValue(accountDeletedPage.getAccountDeletedFirstParagraph(), "have.text",
                                             "Your account has been permanently deleted!");
            accountDeletedPage.validateValue(accountDeletedPage.getAccountDeletedSecondParagraph(), "have.text",
                                             "You can create new account to take advantage of member privileges to enhance your online shopping experience with us.");

            accountDeletedPage.clickOnContinueButton();

            landingPage.isElementVisible(landingPage.getLoginButton());

        })
        
    })

})