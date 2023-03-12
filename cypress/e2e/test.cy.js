///<reference typres="cypress">

describe('Test suite sauce demo', () => {
  beforeEach(()=>{
    cy.visit('http://192.168.227.1:8081/')
  })

  it('Varifier la présence des éléments sur la page sauce demo', () => {
    //Vérifier
    cy.log('verif test one')
    cy.contains('h1', 'Bienvenue').should('be.visible')
   /* cy.get('.login_logo').should('be.visible').and('contain.text', 'Swag Labs')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')*/
    
  })
   it('Connexion sur le site sauce demo', () => {
    cy.log('verif test tow')
    cy.get('#btn').should('contain','Submit').and('be.visible')
    
    /*cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()*/
    
  })
})