/// <reference types="cypress" />

describe('Dropdown tests', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
    });
  
    it('Default option should be "Please select an option"', () => {
        cy.get('select#dropdown option:selected').should('have.text', 'Please select an option');
    });
  
    it('Select "Option 2" and verify it is selected', () => {
      cy.get('#dropdown').select('Option 2');
      cy.get('#dropdown').should('have.value', '2');
    });
  });
  