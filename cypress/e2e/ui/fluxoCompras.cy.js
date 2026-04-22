import { homePageLocators } from "../../support/homePageLocator/Locator";

describe('logar e efetuar uma compra', () => {
    beforeEach("Criar conta", () => {
        cy.createAccount()
    })
    it('Place Order: Register while Checkout', () => {
        cy.placeOrder()
        cy.get(homePageLocators.orderPlaced).should('be.visible');
        cy.deleteAccount()
    })
    it('Place Order: Register before Checkout', () => {
        cy.logoutSession()
        cy.get(homePageLocators.homeBtn).click()
        cy.get(homePageLocators.addCartInput).click();
        cy.get(homePageLocators.addcart2Input).click();
        cy.get(homePageLocators.cartBtn).click();
        cy.get(homePageLocators.buyBtn).click();
        cy.get(homePageLocators.viewCartBtn).click()
        cy.login()
        cy.placeOrder()
        cy.get(homePageLocators.orderPlaced).should('be.visible');
        cy.deleteAccount()
    })
    it('Place Order: Login before Checkout', () => {
        cy.logoutSession()
        cy.login()
        cy.placeOrder()
        cy.get(homePageLocators.orderPlaced).should('be.visible');
        cy.deleteAccount()
    })
    it.only('Verify All Products and product detail page', () => {
        cy.logoutSession()
        cy.get(homePageLocators.cart2Btn).click();
        cy.contains('All Products').should('be.visible')
        cy.get(homePageLocators.productBtn).click();
        cy.get(homePageLocators.productInfo).should('be.visible');
        cy.get(homePageLocators.productSpan).should('be.visible');
        cy.contains('Category:').should('be.visible');
        cy.contains('Condition:').should('be.visible');
        cy.contains('Brand:').should('be.visible');
    })
    it.only('Contact Us Form', () => {
        cy.logoutSession()
        cy.sendEmail()
    })
})