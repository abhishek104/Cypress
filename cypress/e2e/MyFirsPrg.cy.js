///<reference types="cypress"/>

it('Google Test',()=>{
    cy.visit('https://www.google.com/')
    cy.wait(6000)
    cy.get('#APjFqb',{timeout:6000}).type('Automation Step By Step{enter}')
})

it.only('Login Test',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()
})