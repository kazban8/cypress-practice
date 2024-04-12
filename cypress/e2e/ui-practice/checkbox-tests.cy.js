/// <reference types="cypress" />

describe('Checkbox tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
  });

  it('checkbox 2 is checked by default - checkbox 2 unchecked - checkbox 1 and 2 unchecked', () => {
    cy.get('[type="checkbox"]').eq(1).should('be.checked');
    cy.get('[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
    cy.get('[type="checkbox"]').eq(0).should('not.be.checked');
    cy.get('[type="checkbox"]').eq(1).should('not.be.checked');
  });

  it('Checkbox 1 should be checked, then both checkboxes should be checked', () => {
    cy.get('[type="checkbox"]').eq(0).check().should('be.checked');
    cy.get('[type="checkbox"]').eq(0).should('be.checked');
    cy.get('[type="checkbox"]').eq(1).should('be.checked');

  });
});
