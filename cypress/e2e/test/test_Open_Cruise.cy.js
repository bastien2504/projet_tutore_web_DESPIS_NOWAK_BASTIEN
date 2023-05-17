import ConnexionStep from '../steps/ConnexionStep';
import HomeStep from '../steps/HomeStep';
import InscriptionStep from '../steps/InscriptionStep';


describe('Test Open Cruise', () => {/*
    it('Connexion avec un user admin, Cas passant', () => {
            cy.fixture('admin.json', 'utf8').as('admin')
            cy.get('@admin').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('http://opencruise-ok.sogeti-center.cloud/login');
            connexionStep.setLogin(data.username,data.password);
            homeStep.verifierNomPrenom(data);
        });
    })
    it('Connexion avec un user, Cas passant', () => {
            cy.fixture('userConnexion.json', 'utf8').as('User')
            cy.get('@User').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('http://opencruise-ok.sogeti-center.cloud/login');
            connexionStep.setLogin(data.username,data.password);
            homeStep.verifierNomPrenom(data);
        });
    })
    it('Connexion avec un user, Cas non passant', () => {
            cy.fixture('userFailConnexion.json', 'utf8').as('UserFail')
            cy.get('@UserFail').then((data) => {
            const connexionStep = new ConnexionStep();
            const homeStep = new HomeStep();
            cy.visit('http://opencruise-ok.sogeti-center.cloud/login');
            connexionStep.setLogin(data.username,data.password);
            connexionStep.checkError(' mot de passe ou identifiant invalide ')
        });
    })*/
    it('Inscription compte particulier et Connexion du compte', () => {
            cy.fixture('newUserParticulier.json', 'utf8').as('newUser')
            cy.get('@newUser').then((data) => {
            const random = '1' + Math.random().toString().substr(2, 9);
            const connexionStep = new ConnexionStep();
            const inscriptionStep = new InscriptionStep()
            const homeStep = new HomeStep()
            data.username = data.username.replace('auto_rand', random)
            cy.visit('http://opencruise-ok.sogeti-center.cloud/login');
            connexionStep.clickNewUser()
            inscriptionStep.verificationArriverFormulaire()
            inscriptionStep.setNewUser(data)
            connexionStep.checkOnLoginPage('Identifiant')
            cy.fixture('admin.json', 'utf8').as('connexionAdmon')
            cy.get('@connexionAdmon').then((data2) => {
                connexionStep.setLogin(data2.username, data2.password)
                homeStep.verifierNomPrenom(data2);
                homeStep.goToAdminConfig()
                homeStep.goToListUtilisateur()
            })
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
            cy.visit('http://opencruise-ok.sogeti-center.cloud/login');
            connexionStep.clickNewUser()
            inscriptionStep.verificationArriverFormulaire()
            inscriptionStep.setNewUser(data)
            connexionStep.checkOnLoginPage('Identifiant')
            cy.fixture('admin.json', 'utf8').as('connexionAdmon')
            cy.get('@connexionAdmon').then((data2) => {
                connexionStep.setLogin(data2.username, data2.password)
                homeStep.verifierNomPrenom(data2);
                homeStep.goToAdminConfig()
                homeStep.goToListUtilisateur()
            })
        });
    })
  })