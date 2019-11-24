/* eslint-disable */

describe('To-Do Application', () => {
  it('lets you delete items from the todo list', () => {
    cy.visit('http://localhost:3000');

    cy
      .get('#todo-input')
      .type('todo-item-test')
      .should('have.value', 'todo-item-test');

    cy
      .contains('Add Todo')
      .click();

    cy
      .get('.todo-list li')
      .contains('todo-item-test')
      .get('button')
      .contains('Delete todo-item-test')
      .click();

    cy
      .get('.todo-list')
      .should(($lis) => {
        expect($lis).to.not.contain('todo-item-test');
      });
  });
});
