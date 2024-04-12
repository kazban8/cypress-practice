/// <reference types="cypress" />

describe('fixtures', () => {

        it("Auto login with used data from a file fixtures", () => {
            cy.visit('https://qauto.forstudy.space', {
                auth: {
                    username: 'guest',
                    password: 'welcome2qauto',
                },
            })
    
            cy.fixture('example.json').then((userData) => {
                cy.contains('Sign In').click();
                cy.get('h4.modal-title').should('be.visible');
                cy.get('input#signinEmail').type(userData.email);
                cy.get('input#signinPassword').type(userData.password);
                cy.contains('Login').click();
                cy.url().should('include', '/panel/garage');    
        })




    })

})