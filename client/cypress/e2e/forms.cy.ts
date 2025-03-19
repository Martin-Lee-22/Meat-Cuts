describe('Tests recipes forms',() => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.animal-list-container').children().first().click()
        cy.get('[data-name="rib"]').should('exist').click()
        cy.get('.add-recipe-button').click()
    })
})