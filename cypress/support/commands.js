import { homePageLocators } from "../support/homePageLocator/Locator";


Cypress.Commands.add('createAccount', () => {
    const email = `arthurgomesky${Date.now()}@hotmail.com`;
    cy.visit('https://automationexercise.com/');
    cy.get(homePageLocators.singupBtn).click();
    cy.contains('New User Signup!').should('be.visible');
    cy.get(homePageLocators.nameInput).type('Arthur Gomes');
    cy.get(homePageLocators.emailInput).type(email);
    Cypress.env('createdEmail', email);//salvando o email criado em um 'let' global
    cy.get(homePageLocators.singupbtn2).click();
    cy.contains('Enter Account Information').should('be.visible')
    cy.get('#id_gender1').click();
    cy.get(homePageLocators.passowordInput).type('arthur123');
    cy.get(homePageLocators.daysBtn).select('25')
    cy.get(homePageLocators.monthsBtn).select('October')
    cy.get(homePageLocators.yearsBtn).select('1999')
    cy.get(homePageLocators.letterBtn).click();
    cy.get(homePageLocators.offerBtn).click();
    cy.get(homePageLocators.firstNameInput).type('Arthur');
    cy.get(homePageLocators.lastNameInput).type('Gomes');
    cy.get(homePageLocators.andressInput).type('Rua Teste endereço');
    cy.get(homePageLocators.stateInput).type('Test');
    cy.get(homePageLocators.cityInput).type('Test');
    cy.get(homePageLocators.zipCodeInput).type('02345030');
    cy.get(homePageLocators.mobileNumber).type('1123456789');
    cy.get(homePageLocators.createAccountBtn).click();
    cy.get(homePageLocators.continueBtn).click();
})
Cypress.Commands.add('placeOrder', () => {
    cy.get(homePageLocators.addCartInput).click();
    cy.get(homePageLocators.addcart2Input).click();
    cy.get(homePageLocators.cartBtn).click();
    cy.get(homePageLocators.buyBtn).click();
    cy.get(homePageLocators.BuyBtn2).click();
    cy.get(homePageLocators.nameCardInput).type('ArthurG');
    cy.get(homePageLocators.cardNumberInput).type('45646545646546');
    cy.get(homePageLocators.cvcInput).type('111');
    cy.get(homePageLocators.monthInput).type('111');
    cy.get(homePageLocators.yearsInput).type('9999');
    cy.get(homePageLocators.payBtn).click();
    
})
Cypress.Commands.add('deleteAccount', () => {
    cy.contains('ul', 'Delete Account').should('be.visible');
    cy.contains('Logged in as').should('be.visible');
    cy.get(homePageLocators.deleteAccountBtn).click();
    cy.contains('Your account has been permanently deleted!').should('be.visible');
    cy.get(homePageLocators.continueBtn).click();
})
Cypress.Commands.add('accountIncorrect', () => {
    cy.visit('https://automationexercise.com/');
    cy.get(homePageLocators.singupBtn).click();
    cy.contains('Login to your account').should('be.visible');
    cy.get(homePageLocators.loginEmailInput).type('Aarthurgomesky@hotmail.com');
    cy.get(homePageLocators.loginpassword2Input).type('arthur123');
    cy.get(homePageLocators.loginBtn).click();
    
})

Cypress.Commands.add('logoutSession', () => {
    cy.get(homePageLocators.logoutBtn).click()
})

Cypress.Commands.add('login', () => {
    cy.get(homePageLocators.singupBtn).click();
    cy.contains('Login to your account').should('be.visible');
    cy.get(homePageLocators.loginEmailInput).type(Cypress.env('createdEmail'));// chamando const - Global
    cy.get(homePageLocators.loginpassword2Input).type('arthur123');
    cy.get(homePageLocators.loginBtn).click();
})

Cypress.Commands.add('sendEmail', () => {
    cy.visit('https://automationexercise.com/');
    cy.get(homePageLocators.contactBtn).click();
    cy.contains('Get In Touch').should('be.visible');
    cy.get(homePageLocators.nameEmailInput).type('Arthur');
    cy.get(homePageLocators.email2Input).type('Arthurgomesky@gmail.com');
    cy.get(homePageLocators.subjectInput).type('Testcase07');
    cy.get(homePageLocators.msgInput).type('Test Case 07 - Cypress - Node.js');
    cy.get(homePageLocators.uploadFile).selectFile("cypress/fixtures/example.pdf");
    cy.get(homePageLocators.submitBtn).click();
    cy.contains ('Success! Your details have been submitted successfully.').should('be.visible');
    cy.get(homePageLocators.homeBtn).click();
})

