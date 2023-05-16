class HomePage {
    
    getButtonMenu(){
        return cy.xpath("//button[@id='dropdownMenu2']")
    }
}
export default HomePage
require('@cypress/xpath')