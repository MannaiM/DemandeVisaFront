import { TestBed, inject } from '@angular/core/testing';

import { DemandevisaService } from './demandevisa.service';

describe('DemandevisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandevisaService]
    });
  });

  it('should be created', inject([DemandevisaService], (service: DemandevisaService) => {
    expect(service).toBeTruthy();
  }));
});
