require('@cypress/xpath');
import InscriptionPage from '../pages/InscriptionPage';

const inscriptionPage=new InscriptionPage();

class InscriptionStep {
    verificationArriverFormulaire(){
        inscriptionPage.getValeurTitre().should('have.text',"Formulaire d'inscription");
    }
    setNewUserCommonInfo(data,formConcerner){
        inscriptionPage.selectTypeCompte().check(data.type)
        inscriptionPage.getNom(formConcerner).type(data.nom)
        inscriptionPage.getPrenom(formConcerner).type(data.prenom)
        inscriptionPage.getDateNaissance(formConcerner).type(data.dateNaissance)
        inscriptionPage.getAdresse(formConcerner).type(data.adresse)
        inscriptionPage.getPays(formConcerner).select(data.ville.pays.nom)
        inscriptionPage.getVille(formConcerner).select(data.ville.nom)
        inscriptionPage.getCodePostal(formConcerner).type(data.codePostal)
        inscriptionPage.getPasseport(formConcerner).type(data.passport)
        inscriptionPage.getCarteIdentite(formConcerner).type(data.cin)
        if (formConcerner== 1){
            cy.log('FirstInput')
            inscriptionPage.getUsername(formConcerner).type(data.username)
        } else if (formConcerner==2){
            cy.log('SecondInput')
            inscriptionPage.getUsername(formConcerner).type(data.username_remplacant)
        }
        inscriptionPage.getTelephone(formConcerner).type(data.tel)
        inscriptionPage.getPassword(formConcerner).type(data.password)
        inscriptionPage.getConfirmPassword(formConcerner).type(data.confirmPassword)    
    }
    setNewUserCasDiverse(data,formConcerner){
        if(data.type == '1'){
            inscriptionPage.getNomConjoint(formConcerner).type(data.nomConjoint)
            inscriptionPage.getPrenomConjoint(formConcerner).type(data.prenomConjoint)
            inscriptionPage.getDateNaissanceConjoint(formConcerner).type(data.dateNaissanceConjoint)

        } else if (data.type =='0') {
            inscriptionPage.getRaisonSociale(formConcerner).select(data.raisonSociale)
            inscriptionPage.getSiret(formConcerner).type(data.siret)
            inscriptionPage.getNombreSalarie(formConcerner).select(data.nombreSalarie) 
        }      
    }
    validateFormulaire(formConcerner){
        inscriptionPage.getButtonValidation(formConcerner).click()
    }
    ouvrirFormSecondReprésentant(){
        inscriptionPage.getCaseSeconReprésentant().check()
    }
    verificationArriverFormSecondReprsentant(){
        inscriptionPage.getTitreModal().should('contains',"Deuxième représentant");
    }

}
export default InscriptionStep