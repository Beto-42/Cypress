/// <reference types="Cypress" />

Cypress.Commands.add('api_login', (user, password)=>{    
    cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": user,
                "password": password
            },
            failOnStatusCode: false
        }).then((response) => {
            return response
                           
        })
    })