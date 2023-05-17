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
    getRaisonSociale(){
        return cy.xpath("//select[@formcontrolname='raisonSociale']").first()
    }
    getSiret(){
        return cy.xpath("//input[@formcontrolname='siret']").first()
    }
    getNombreSalarie(){
        return cy.xpath("//select[@formcontrolname='nombreSalarie']").first()
    }
    getNomConjoint(){
        return cy.xpath("//input[@formcontrolname='nomConjoint']")
    }
    getPrenomConjoint(){
        return cy.xpath("//input[@formcontrolname='prenomConjoint']")
    }
    getDateNaissanceConjoint(){
        return cy.xpath("//input[@formcontrolname='dateNaissanceConjoint']")
    }
    getButtonValidation(){
        return cy.xpath('//button[contains(.,"Créer votre compte")]').first()
    }
}
export default InscriptionPage
require('@cypress/xpath')