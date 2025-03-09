describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('teste', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Utilities').click();
  })
})