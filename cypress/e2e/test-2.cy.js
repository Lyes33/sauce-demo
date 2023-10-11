///<reference typres="cypress">

describe('Test suite sauce demo', () => {
    beforeEach(()=>{
      cy.visit('/')
    })
  
    it('Varifier la présence des éléments sur la page sauce demo', () => {
      //Vérifier
      cy.log('verif test one')
      cy.contains('h1', 'Bienvenue').should('be.visible')
      
    })
     it('Connexion sur le site sauce demo', () => {
      cy.log('verif test tow')
      cy.get('#btn').should('contain','Submit').and('be.visible')
      
    })
  })