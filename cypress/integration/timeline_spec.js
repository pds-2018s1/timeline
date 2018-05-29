describe( 'timeline application', function(){

  it ('should render homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it ('should take you to admin page after entering your name', () => {
    cy.login()
    cy.get('#greetingMessage').should('contain', 'Hola Lucas')
  })

  it ('should start a match after filling in the form', () => {
    cy.login()
    
    cy.get('#newMatchName').type('New match')
    cy.get('#newMatchSize').type('4')
    cy.get('#newMatchSubmit').click()

    cy.get('#waitingForMatch')
    
    cy.get('#gameTable', {timeout: 6000} ) //El cartel de waiting for match tiene un sleep de 3 segundos
    cy.get('#gameTimeline')
    cy.get('#playerHand')
  })

  it ('should not let you start a new match without filling the form entirely', () => {
    cy.login()
    cy.get('#newMatchSubmit').should('be.disabled') 
  })

  it ('should not let you start a new match without typing the match name', () => {
    cy.login()
    cy.get('#newMatchSize').type('3')
    cy.get('#newMatchSubmit').should('be.disabled') 
  })

  it ('should not let you start a new match without typing the match size', () => {
    cy.login()
    cy.get('#newMatchName').type('A match name')
    cy.get('#newMatchSubmit').should('be.disabled') 
  })

  it ('should not let you start a new match whose size is lesser than 2 or greater than 8', () => {
    cy.login()
    cy.get('#newMatchSize').type('1')
    cy.get('#newMatchSubmit').should('be.disabled') 

    cy.get('#newMatchSize').type('9')
    cy.get('#newMatchSubmit').should('be.disabled') 
  })

})