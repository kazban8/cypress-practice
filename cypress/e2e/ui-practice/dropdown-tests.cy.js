/// <reference types="cypress" />

describe('Dropdown tests', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
    });
  
    it('Default option should be "Please select an option"', () => {
      cy.get('#dropdown').should('have.text', '\n    Please select an option\n    Option 1\n    Option 2\n  ');
    });
  
    it('Select "Option 2" and verify it is selected', () => {
      cy.get('#dropdown').select('Option 2');
      cy.get('#dropdown').should('have.value', '2');
    });
  });
  