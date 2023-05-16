class InscriptionPage {
    
    getValeurTitre(){
        return cy.xpath('//h2')
    }
    selectTypeCompte(){
        return cy.xpath('//input[@type="radio"]')
    }
    getNom(){
        return cy.xpath('//input[@formcontrolname="prenom"]').first()
    }
    getPrenom(){
        return cy.xpath('//input[@formcontrolname="nom"]').first()
    }
    getDateNaissance(){
        return cy.xpath("//input[@formcontrolname='dateNaissance']").first()
    }
    getAdresse(){
        return cy.xpath("//input[@formcontrolname='adresse']").first()
    }
    getPays(){
        return cy.xpath("//select[@formcontrolname='currentPays']").first()
    }
    getVille(){
        return cy.xpath("//select[@formcontrolname='ville']").first()
    }
    getCodePostal(){
        return cy.xpath("//input[@formcontrolname='codePostal']").first()
    }
    getPasseport(){
        return cy.xpath("//input[@formcontrolname='passport']").first()
    }
    getCarteIdentite(){
        return cy.xpath("//input[@formcontrolname='cin']").first()
    }
    getUsername(){
        return cy.xpath("//input[@formcontrolname='username']").first()
    }
    getTelephone(){
        return cy.xpath("//input[@formcontrolname='tel']").first()
    }
    getPassword(){
        return cy.xpath("//input[@formcontrolname='password']").first()
    }
    getConfirmPassword(){
        return cy.xpath("//input[@formcontrolname='confirmPassword']").first()
    }

}
export default InscriptionPage
require('@cypress/xpath')