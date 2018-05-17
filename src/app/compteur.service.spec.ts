import { TestBed, inject } from '@angular/core/testing';

import { CompteurService } from './compteur.service';

describe('CompteurService', () => {
  // beforeEach est une fonction Jasmine exécutée avant chaque cas de test
  beforeEach(() => {
    // création d'un module composé d'un service CompteurService
    TestBed.configureTestingModule({
      providers: [CompteurService]
    });
  });
  // inject() permet ici de récupérer une instance du service via l'injection de dépendance.
  it('should be created', inject([CompteurService], (service: CompteurService) => {
    // expect et toBeTruthy() vérifie que le service est instancié
    expect(service).toBeTruthy();
  }));

    it("le premier appel à incrementer() retourne 1", inject([CompteurService], (service: CompteurService) => {
    const resultat = service.incrementer();
    expect(resultat).toBe(1);
    })
  );
    it("deux appels à incrementer() retourne 2", inject([CompteurService], (service: CompteurService) => {
    service.incrementer();
    const resultat = service.incrementer();
      expect(resultat).toBe(2);
    })
  );
});

