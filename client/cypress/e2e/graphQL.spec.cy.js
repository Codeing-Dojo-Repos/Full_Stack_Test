/// <reference types="cypress" />
import {countryNames, queryTodos} from '../support/graphQL-queries'

describe('GraphQL Requests', () => {

    it('graphQL request 1', () => {

        const countryName = `
        query countryName {
            countries {
                name,
                code,
                capital
            }
        }
        `
        cy.request({
            url: 'https://countries.trevorblades.com/',
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            body: { query: countryName },
            failOnStatusCode: false
        }).then(response => {
            cy.log(`${response}`)
            //console.log(response.body.data.countries)
        })
    })

    it('graphQL request 2', () => {
        var foo;

        cy.request({
            url: 'https://countries.trevorblades.com/',
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            body: { query: countryNames },
            failOnStatusCode: false
        }).then(response => {
            //cy.log(`${response}`)
            console.log(response.body.data.countries[0])
            console.log("country is " + response.body.data.countries[0].name)
            cy.log("country is " + response.body.data.countries[0].name)
            foo = response.body.data.countries[0].name
            //cy.log(`first country is ${foo[0]}`, foo[0])
        })

        //cy.log(`first country is ${foo[0]}`, foo[0])
        //console.log(`first country is ${foo}`)
        console.log("first country is " + foo)
    })

    it('graphQL request 3', () => {
        cy.log('test')
        cy.requestGraphQL(countryNames)
    })

})