import { TestBed, inject } from '@angular/core/testing';

import { VoirdetailsService } from './voirdetails.service';

describe('VoirdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoirdetailsService]
    });
  });

  it('should be created', inject([VoirdetailsService], (service: VoirdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
