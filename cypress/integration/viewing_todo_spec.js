/* eslint-disable */

describe('Renders To-Do Application', () => {
  it('Renders page', () => {
    cy.visit('http://localhost:3000');

    cy
      .contains('Team To-Do List');
  });

  it('renders the current date', () => {
    const today = new Date();

    cy.visit('http://localhost:3000');

    cy
      .contains(today.toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric', year: 'numeric', month: 'long'}));
  });
});
