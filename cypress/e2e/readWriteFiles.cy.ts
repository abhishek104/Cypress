describe('read write files', () => {
    it('read file using fixture', () => {
        cy.fixture('example.json').its('name').should('eq', 'Cypress')
    })
    it('read File',function(){
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq','Cypress')

    })
    it('write file',()=>{
        cy.writeFile('sample.txt','Abhishek')
        cy.writeFile('sample.txt','\nSagar',{flag:'a+'})
    })
    it.only('read file',()=>{
        cy.readFile('sample.txt').should('contain','Abhishek')
    })
})