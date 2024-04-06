describe('example to-do app', () => {

it("password test", () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input#username').type('tomsmith');
    cy.get('input#password').type('tomsmith {enter}');
    cy.get('div#flash').should('have.text', `\n            Your password is invalid!\n            ×\n          `);
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
})

it("login test", () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input#username').type('test1234567899');
    cy.get('input#password').type('SuperSecretPassword!{enter}');
    cy.get('div#flash').should('have.text', `\n            Your username is invalid!\n            ×\n          `);    
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
})

})


