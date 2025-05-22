
describe('API - Realizando Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.api_login('fulano@qa.com','teste').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Login realizado com sucesso") 
        })       
    });

    it('Deve retornar erro ao realizar login com senha incorreta', () => {
        cy.api_login('fulano@qa.com','SenhaIncorreta').then((response) => {
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal("Email e/ou senha inválidos")
        })

    });

});
       