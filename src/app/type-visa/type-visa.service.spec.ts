import { TestBed, inject } from '@angular/core/testing';

import { TypeVisaService } from './type-visa.service';

describe('TypeVisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeVisaService]
    });
  });

  it('should be created', inject([TypeVisaService], (service: TypeVisaService) => {
    expect(service).toBeTruthy();
  }));
});
