/* eslint-disable */

describe('To-Do Application', () => {
  it('lets you add to the todo list', () => {
    cy.visit('http://localhost:3000');

    cy
      .get('#todo-input')
      .type('todo-item-test')
      .should('have.value', 'todo-item-test');

    cy
      .contains('Add Todo')
      .click();

    cy
      .get('.todo-list')
      .should(($lis) => {
        expect($lis.eq($lis.length - 1)).to.contain('todo-item-test');
      });
  });
});
