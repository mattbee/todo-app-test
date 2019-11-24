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

  it('renders the user avatar', () => {
    const today = new Date();

    cy.visit('http://localhost:3000');

    cy
      .get('.user-area img')
      .should('have.attr', 'src')
      .should('include','http://gravatar.com/avatar/67b8c521fee9aeab7886b4d1dc6947e1?s=50');
  });
});
