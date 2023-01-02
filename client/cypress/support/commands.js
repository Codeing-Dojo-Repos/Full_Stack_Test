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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('requestGraphQL', (query) => {
    cy.request({
        url: 'https://countries.trevorblades.com/',
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        body: { query: query },
        failOnStatusCode: false
    }).then(response => {
        //cy.log(`${response}`)
        //console.log(response.body.data.countries)
    })
})

Cypress.Commands.add('getCountryName', (query) => {
    cy.request({
        url: 'https://countries.trevorblades.com/',
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        body: { query: query },
        failOnStatusCode: false
    }).then(response => {
        //cy.log(`${response}`)
        return response.body.data.countries[0]
        //return cy.wrap('hello')  
    })
})