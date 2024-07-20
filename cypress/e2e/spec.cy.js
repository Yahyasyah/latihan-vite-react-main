describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your password')
      .type('123456').should('have.value', '123456')

    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
      .should('be.visible')

    cy.get('[data-testid="users"]').click()
    cy.url().should('include', '/users');
    cy.get('div.datatableTitle').contains('USERS')

    cy.get('[data-testid="products"]').click()
    cy.url().should('include', '/products');
    cy.get('div.datatableTitle').contains('PRODUCTS')

    cy.get('[data-testid="categories"]').click()
    cy.url().should('include', '/categories');
    cy.get('div.datatableTitle').contains('CATEGORIES')

    cy.get('div.datatableTitle').contains('Add New').should('be.visible').click()
    cy.url().should('include', '/categories/new');
    cy.get('h1').contains('Add New Category')

    cy.get('input#title')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Coffee')
      .type('Appetizer').should('have.value', 'Appetizer')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/categories');
    cy.get('div.datatableTitle').contains('CATEGORIES')

    cy.get('div.datatable')
      .contains('Appetizer')
      .should('be.visible')

    cy.get('div.datatable')
      .contains('Appetizer')
      .parents('div[role="row"]')
      .find('.deleteButton')
      .click()
  })
})