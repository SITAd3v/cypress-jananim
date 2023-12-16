describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type("gmail login")
    cy.contains('Sök på Google').click()
  })
})