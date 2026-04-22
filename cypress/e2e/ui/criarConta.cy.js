describe('Criar conta', () => {
  beforeEach("Visitar Site", () => {
    cy.createAccount()
  })
  it('Register User ', () => {
    cy.createAccount()
    cy.deleteAccount()
  })
  it('Login Account/Logout', () => {
    cy.logoutSession()
    cy.login()
    cy.contains('Logged in as').should('be.visible');
    cy.contains('ul', 'Delete Account').should('be.visible');
  })
  it('Login User with incorrect email and password', () => {
    cy.logoutSession()
    cy.accountIncorrect()
    cy.contains('Login to your account').should('be.visible');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })
}) 
