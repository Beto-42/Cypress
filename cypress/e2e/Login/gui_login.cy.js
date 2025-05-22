/// <reference types="Cypress" />

describe('Teste Funcional de Login', () => {
    it('Dever realizar o login com sucesso', () => {
        cy.login_teste('standard_user',     'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
        
    });

    it('Validando login incorreto', () => {
        cy.login_teste('standard_user2', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')    
        
    });

    it('Validar senha incorreta', () => {
        cy.login_teste('standard_user', 'senhaerrada')  
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        
    });
});
