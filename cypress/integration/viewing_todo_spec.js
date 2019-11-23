/* eslint-disable */

describe('Renders To-Do Application', () => {
  it('Renders page', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Team To-Do List');
  });
});
