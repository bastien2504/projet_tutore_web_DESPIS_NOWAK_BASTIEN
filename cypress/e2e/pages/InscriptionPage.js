class InscriptionPage {
    
    getValeurTitre(){
        return cy.xpath('//h2')
    }
    selectTypeCompte(){
        return cy.xpath('//input[@type="radio"]')
    }
    getNom(int){
        return cy.xpath('(//input[@formcontrolname="prenom"])['+int+']')
    }
    getPrenom(int){
        return cy.xpath('(//input[@formcontrolname="nom"])['+int+']')
    }
    getDateNaissance(int){
        return cy.xpath('(//input[@formcontrolname="dateNaissance"])['+int+']')
    }
    getAdresse(int){
        return cy.xpath('(//input[@formcontrolname="adresse"])['+int+']')
    }
    getPays(int){
        return cy.xpath('(//select[@formcontrolname="currentPays"])['+int+']')
    }
    getVille(int){
        return cy.xpath('(//select[@formcontrolname="ville"])['+int+']')
    }
    getCodePostal(int){
        return cy.xpath('(//input[@formcontrolname="codePostal"])['+int+']')
    }
    getPasseport(int){
        return cy.xpath('(//input[@formcontrolname="passport"])['+int+']')
    }
    getCarteIdentite(int){
        return cy.xpath('(//input[@formcontrolname="cin"])['+int+']')
    }
    getUsername(int){
        return cy.xpath('(//input[@formcontrolname="username"])['+int+']')
    }
    getTelephone(int){
        return cy.xpath('(//input[@formcontrolname="tel"])['+int+']')
    }
    getPassword(int){
        return cy.xpath('(//input[@formcontrolname="password"])['+int+']')
    }
    getConfirmPassword(int){
        return cy.xpath('(//input[@formcontrolname="confirmPassword"])['+int+']')
    }
    getRaisonSociale(int){
        return cy.xpath('(//select[@formcontrolname="raisonSociale"])['+int+']')
    }
    getSiret(int){
        return cy.xpath('(//input[@formcontrolname="siret"])['+int+']')
    }
    getNombreSalarie(int){
        return cy.xpath('(//select[@formcontrolname="nombreSalarie"])['+int+']')
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
    getButtonValidation(int){
        return cy.xpath('(//button[contains(.,"Créer votre compte")])['+int+']')
    }
    getCaseSeconReprésentant(){
        return cy.xpath('//input[@type="checkbox"]')
    }
    getTitreModal(){
        return cy.xpath('//h5')
    }
}
export default InscriptionPage
require('@cypress/xpath')