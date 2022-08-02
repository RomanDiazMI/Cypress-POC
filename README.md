# CypressPOC
Automated UI test example as a proof of concept
# Getting started with Cypress
Cypress is an end-to-end testing tool with cross-browser compatibility and allows UI and APIs testing interactions
https://www.cypress.io/.
# The project directory structure
cypress
- fixtures -> contains files to be used in our tests (could be .png, .zip, .json, etc).
- e2e -> contains test cases group by file or folder types of test.
  - some-functionality-under-test -> contains tests cy.js files group by functionality.
- plugins -> contains plugins to be called when a project is opened or reopened as a config.
- support
  - page-object -> contains page object model structure of classes that represents each app web page.
  - commands -> contains global common functions that can be called as part of cypress built-in functions.
  - constants -> contains global common constants
  - utils -> contains global common functions
# Accessing private data from .env specific config
In order to provide private data to our app we use a .env file which is called with the dotenv plugin and provides us with entry data for our methods. In order to modify/add/delete these key:value objects, you have to change them in your local repo .env file.
## 1. Installation
After repository is cloned locally. Install all dependencies needed using the following command line:
npm install
## 2. Debug Mode
After dependencies have been correctly installed:
npx cypress open
- It opens the browser mode. You will see cypress server is up and running and you will be able to execute any test folder/suite independently just clicking on it.
npx cypress run
- It run tests with headless mode activated and record video included)
## 3. CLI Mode
After dependencies have been correctly installed, you can run tests with command line scripts that have been included in our package.json:
1. npm run cypress:run:chrome
2. npm run cypress:run:e2e:chrome
3. npm run cypress:run
   it's the same that
4. npx cypress run --browser chrome -> it runs all the test cases in headless mode and Chrome browser
5. npx cypress run --browser chrome --spec 'cypress/e2e/testExample.cy.js'
   -> it runs only e2e tests in headless mode and Chrome browser
6. npx cypress run -> it runs all test cases in headless mode in the default browser
# Browser Options
chrome
firefox
edge
You can also choose the browser:
npx cypress run --browser {selectedBrowser}
You will see all test suites are run in headless mode.
# Note 1
If mode argument is not sent, by default will be run on Electron browser.
# Note 2
You need to have installed the browser in your machine in order to run tests in the specified
browser. If not, command will fail.
# 5. Troubleshooting
The followings are known issues and how to fix them.
### 5.1 Error: cannot find module 'cypress'
Install cypress dependency via npm once you are in your project path:
1. cd /your/project/path
2. npm install cypress --save-dev









