// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.visit('http://localhost:3000')
  cy.get('#loginName').type('Lucas')
  cy.get('#loginSubmit').click()
})


Cypress.Commands.add("newMatch", () => {
  cy.get('#newMatchName').type('New match')
  cy.get('#newMatchSize').type('4')
  cy.get('#newMatchSubmit').click()
  cy.get('#waitingForMatch')
})