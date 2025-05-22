/// <reference types="Cypress" />

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo de compra de produtos', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        //Ordenaçãon de produtos de menor para maior valor
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

        //Fazendo a checagem de produtos
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        //Checagem da quantidade de produtos no carrinho
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
        cy.get('[data-test="shopping-cart-link"]').click()
        //Check no carrinho
        cy.verifica_produto()      
        
        //Continuar comprando
        //cy.get('[data-test="continue-shopping"]').click()

        //Checkount
        cy.get('[data-test="checkout"]').click()
        //Inserindo dados do checkout
        cy.get('[data-test="firstName"]').type('Beto')
        cy.get('[data-test="lastName"]').type('Oliveira')
        cy.get('[data-test="postalCode"]').type('12345678')
        cy.get('[data-test="continue"]').click()

        //Validando os produtos no checkout
        cy.verifica_produto()

        //Checagem do valor total
        cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')

        //Confirmando a compra e finalizando
        cy.get('[data-test="finish"]').click()
        //Validando a tela de finalização
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
        
        
        

    });
});