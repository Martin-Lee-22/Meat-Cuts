describe('Test the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Checks the header of the home page', () => {
    cy.get('.animal-selector-header').contains('Select an animal', {matchCase: false})
  })

  it('Check to see if there is animal lists exists and should have more than 1 animal list items', () => {
    cy.get('.animal-list-container').should('exist').children().should('have.length.greaterThan', 1)
  })

  it('Selects the first animal and select the `rib` cut' ,() => {
    cy.get('.animal-list-container').children().first().click()
    cy.get('[data-name="rib"]').should('exist').click()
  })
})
