import ConnexionStep from '../steps/ConnexionStep';
import HomeStep from '../steps/HomeStep';
import InscriptionStep from '../steps/InscriptionStep';

describe('Test Open Cruise', () => {
    
    it('Connexion avec un user admin, Cas passant', () => {
            cy.fixture('admin'+Cypress.env('fileOption')+'.json', 'utf8').as('admin')
            cy.get('@admin').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('/login');
            connexionStep.setLogin(data.username,data.password);
            homeStep.verifierNomPrenom(data);
        });
    })
    it('Connexion avec un user, Cas passant', () => {
            cy.fixture('userConnexion'+Cypress.env('fileOption')+'.json', 'utf8').as('User')
            cy.get('@User').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('/login');
            connexionStep.setLogin(data.username,data.password);
            homeStep.verifierNomPrenom(data);
        });
    })
    it('Connexion avec un user, Cas non passant', () => {
        cy.fixture('userFailConnexion.json', 'utf8').as('UserFail')
        cy.get('@UserFail').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('/login');
            connexionStep.setLogin(data.username,data.password);
            connexionStep.checkError(' mot de passe ou identifiant invalide ')
        });
    })
    it('Inscription compte particulier et Connexion du compte', () => {
        cy.fixture('newUserParticulier.json', 'utf8').as('newUser')    
        cy.get('@newUser').then((data) => {
            const random = '1' + Math.random().toString().substr(2, 9);
            const connexionStep = new ConnexionStep();
            const inscriptionStep = new InscriptionStep()
            const homeStep = new HomeStep()
            data.username = data.username.replace('auto_rand', random)
            data.type = '1'
            cy.visit('/login');
            connexionStep.clickNewUser()
            inscriptionStep.verificationArriverFormulaire()
            inscriptionStep.setNewUserCommonInfo(data,1)
            inscriptionStep.setNewUserCasDiverse(data,1)
            inscriptionStep.validateFormulaire(1)

            connexionStep.checkOnLoginPage('Identifiant')
            cy.fixture('admin'+Cypress.env('fileOption')+'.json', 'utf8').as('admin')
            cy.get('@admin').then((data2) => {
                connexionStep.setLogin(data2.username, data2.password)
                homeStep.verifierNomPrenom(data2);
                homeStep.goToAdminConfig()
                homeStep.goToListUtilisateur()
                homeStep.approuverUser(data)
                homeStep.verifierApprouver(data)
                homeStep.deconnexionCompte()
            })
            connexionStep.checkOnLoginPage('Identifiant')
            connexionStep.setLogin(data.username, data.password)
            homeStep.verifierNomPrenom(data);
        });
    })
    it('Inscription compte professionel et Connexion du compte', () => {
        cy.fixture('newUserParticulier.json', 'utf8').as('newUser')
        cy.get('@newUser').then((data) => {
            const random = '1' + Math.random().toString().substr(2, 9);
            const connexionStep = new ConnexionStep();
            const inscriptionStep = new InscriptionStep()
            const homeStep = new HomeStep()
            data.username = data.username.replace('auto_rand', random)
            data.type = '0'
            cy.visit('/login');
            connexionStep.clickNewUser()
            inscriptionStep.verificationArriverFormulaire()
            inscriptionStep.setNewUserCommonInfo(data,1)
            inscriptionStep.setNewUserCasDiverse(data,1)
            inscriptionStep.validateFormulaire(1)

            connexionStep.checkOnLoginPage('Identifiant')
            cy.fixture('admin'+Cypress.env('fileOption')+'.json', 'utf8').as('admin')
            cy.get('@admin').then((data2) => {
                connexionStep.setLogin(data2.username, data2.password)
                homeStep.verifierNomPrenom(data2);
                homeStep.goToAdminConfig()
                homeStep.goToListUtilisateur()
                homeStep.approuverUser(data)
                homeStep.verifierApprouver(data)
                homeStep.deconnexionCompte()
            })
            connexionStep.checkOnLoginPage('Identifiant')
            connexionStep.setLogin(data.username, data.password)
            homeStep.verifierNomPrenom(data);
        });
    })
    it('Inscription compte professionel et Echec de Connexion au compte car bloque', () => {
        cy.fixture('newUserParticulier.json', 'utf8').as('newUser')
        cy.get('@newUser').then((data) => {
            const random = '1' + Math.random().toString().substr(2, 9);
            const connexionStep = new ConnexionStep();
            const inscriptionStep = new InscriptionStep()
            const homeStep = new HomeStep()
            data.username = data.username.replace('auto_rand', random)
            data.type = '1'
            cy.visit('/login');
            connexionStep.clickNewUser()
            inscriptionStep.verificationArriverFormulaire()
            inscriptionStep.setNewUserCommonInfo(data,1)
            inscriptionStep.setNewUserCasDiverse(data,1)
            inscriptionStep.validateFormulaire(1)

            connexionStep.checkOnLoginPage('Identifiant')
            connexionStep.setLogin(data.username, data.password)
            connexionStep.checkError(' votre compte est bloqué ')
        });
    })
    it('Inscription compte professionel Avec 2 représentant', () => {
        cy.fixture('newUserParticulier.json', 'utf8').as('newUser')
        cy.get('@newUser').then((data) => {
            const random1 = '1' + Math.random().toString().substr(2, 9);
            const random2 = '2' + Math.random().toString().substr(2, 9);

            const connexionStep = new ConnexionStep();
            const inscriptionStep = new InscriptionStep()
            const homeStep = new HomeStep()
            data.username = data.username.replace('auto_rand', random1)
            data.username_remplacant = data.username_remplacant.replace('auto_rand', random2)
            data.type = '0'
            cy.visit('/login');
            connexionStep.clickNewUser()
            inscriptionStep.verificationArriverFormulaire()
            inscriptionStep.setNewUserCommonInfo(data,1)
            inscriptionStep.setNewUserCasDiverse(data,1)
            inscriptionStep.ouvrirFormSecondReprésentant()
            //inscriptionStep.verificationArriverFormSecondReprsentant()
            inscriptionStep.setNewUserCommonInfo(data,2)
            inscriptionStep.setNewUserCasDiverse(data,2)
            inscriptionStep.validateFormulaire(2)

            inscriptionStep.validateFormulaire(1)

            connexionStep.checkOnLoginPage('Identifiant')
            connexionStep.setLogin(data.username, data.password)
            connexionStep.checkError(' votre compte est bloqué ')
            
        });
    })
    it('Recherche une croisiere par un mots clées est affiche aux moins un resultat', () => {
        cy.fixture('admin'+Cypress.env('fileOption')+'.json', 'utf8').as('User')
        cy.get('@User').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('/login');
            connexionStep.setLogin(data.username,data.password);
            homeStep.verifierNomPrenom(data);
            homeStep.recherParMotClées('balade');
            homeStep.verifierPresenceMotCles('balade');
        });
    })
    it('Recherche une croisiere par un mots clées est affiche aucun resultat', () => {
        cy.fixture('admin'+Cypress.env('fileOption')+'.json', 'utf8').as('User')
        cy.get('@User').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('/login');
            connexionStep.setLogin(data.username,data.password);
            homeStep.verifierNomPrenom(data);
            homeStep.recherParMotClées('lapin');
            homeStep.verifierNonPresenceMotCles('lapin');
    });
  })

})