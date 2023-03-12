///<reference typres="cypress">

describe('Test suite sauce demo', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Varifier la présence des éléments sur la page sauce demo', () => {
    //Vérifier
    cy.log('verif test one')
   /* cy.get('.login_logo').should('be.visible').and('contain.text', 'Swag Labs')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')*/
    
  })
   it('Connexion sur le site sauce demo', () => {
    cy.log('verif test tow')
    /*cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()*/
    
  })
})