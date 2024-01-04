import { LoginPage } from "../pages/loginPage"
beforeEach('before describe',()=>{
  console.log('Before describe==')
})
describe('grouping tests',function(){
  this.beforeEach(()=>{
    loinPage.navigate('https://www.google.com/');
  })
const loinPage=new LoginPage
it('google test',function(){
  loinPage.enterText('Automation Step By Step')
})
it('google test with wrong URL',function(){
  loinPage.enterText('Automation Step By Step')
})
})