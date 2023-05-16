import ConnexionStep from '../steps/ConnexionStep';
import HomeStep from '../steps/HomeStep';


describe('Test Open Cruise', () => {
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
    it('Connexion avec un user admin, Cas non passant', () => {
        expect(true).to.equal(true)
      })
  })