describe('Test for broken CSS', () => {
  it('Find CSS classes with no definition', () => {
    // TODO: implement this (ignore this boilerplate)
    cy.visit('/blog')
    cy.get('.bg-green-300')
  })
})
