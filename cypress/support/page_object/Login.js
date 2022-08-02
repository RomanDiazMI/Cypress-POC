class Login {

    getLoginUsernameInput() {
        return cy.get('[data-test="username"]');
    }

    getLoginPasswordInput() {
        return cy.get('[data-test="password"]');
    }

    getLoginButton() {
        return cy.get('[data-test="login-button"]');
    }

}

export default Login;