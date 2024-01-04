export class LoginPage
{

    loginPage_search='#APjFqb'
    navigate(url:string)
    {
        cy.visit(url)

    }
    enterText(text:string)
    {
        cy.get(this.loginPage_search).type(text)
        .type('{Enter}')
    }   
}