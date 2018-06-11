
  

describe( 'cards administration', function(){

    it ('should render homepage', () => {
        cy.visit('http://localhost:3000')
    })

    it ('should open the cards list', () => {
        cy.login()
        cy.get('#administrateCards').click()
    })

    it ('should show "add card" button and open modal', () => {
        cy.login()
        cy.get('#administrateCards').click()
        cy.get('#addCard').click()
        cy.get('#addCardHeader').should('contain', 'Agregar una carta')
    })

    it('shoud add card and show it in the list', () => {
        cy.login()
        cy.get('#administrateCards').click()
        cy.wait(2000)
        cy.get('#addCard').click()
        cy.get('[name="name"]').type('test')
        cy.get('[type="number"]').type('2018')
        cy.get('[name="group"]').type('test')
        cy.get('#saveCard').click()
        cy.wait(1000)
        cy.get('#searchGroups').type('test')
        cy.get('#cardsList').should('have.length', 1)
        cy.get('#deleteCard').click()
    })

    it('shoud add a card and delete it from the list', () => {
        cy.login()
        cy.get('#administrateCards').click()
        cy.wait(2000)
        cy.get('#addCard').click()
        cy.get('[name="name"]').type('test1')
        cy.get('[type="number"]').type('2018')
        cy.get('[name="group"]').type('test1')
        cy.get('#saveCard').click()
        cy.wait(1000)
        cy.get('#searchGroups').type('test1')
        cy.get('#cardsList').should('have.length', 1)
        cy.get('#deleteCard').click()
        cy.get('#searchGroups').clear()
        cy.get('#searchGroups').type('test1')
        cy.get('#deleteCard').should('not.exist')
    })
})