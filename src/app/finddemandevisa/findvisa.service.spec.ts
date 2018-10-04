import { TestBed, inject } from '@angular/core/testing';

import { FindvisaService } from './findvisa.service';

describe('FindvisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindvisaService]
    });
  });

  it('should be created', inject([FindvisaService], (service: FindvisaService) => {
    expect(service).toBeTruthy();
  }));
});
