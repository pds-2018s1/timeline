describe( 'cards administration', function(){


    beforeEach(function () {
        cy.visit('http://localhost:3000')
        cy.login()
    })



    it ('should show "add card" button and open modal', () => {
        cy.get('#administrateCards').click()
        cy.get('#addCard').click()
        cy.get('#addCardHeader').should('contain', 'Agregar una carta')
    })

    it('shoud add card and show it in the list', () => {
        cy.get('#administrateCards').click()
        cy.get('#cardsList')
        cy.get('#addCard').click()
        cy.get('[name="name"]').type('test')
        cy.get('[type="number"]').type('2018')
        cy.get('[name="group"]').type('test')
        cy.get('#saveCard').click()
        cy.get('#cardsList')
        cy.get('#searchGroups').type('test')
        cy.get('#cardsList').should('have.length', 1)
        cy.get('#deleteCard').click()
        cy.get('#cardsList')
    })

    it('shoud add a card and delete it from the list', () => {
        cy.get('#administrateCards').click()
        cy.get('#cardsList')
        cy.get('#addCard').click()
        cy.get('[name="name"]').type('test1')
        cy.get('[type="number"]').type('2018')
        cy.get('[name="group"]').type('test1')
        cy.get('#saveCard').click()
        cy.get('#cardsList')
        cy.get('#searchGroups').type('test1')
        cy.get('#cardsList').should('have.length', 1)
        cy.get('#deleteCard').click()
        cy.get('#cardsList')
        cy.get('#searchGroups').clear()
        cy.get('#searchGroups').type('test1')
        cy.get('#deleteCard').should('not.exist')
    })
})