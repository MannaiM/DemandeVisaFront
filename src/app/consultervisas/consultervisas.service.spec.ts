import { TestBed, inject } from '@angular/core/testing';

import { ConsultervisasService } from './consultervisas.service';

describe('ConsultervisasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultervisasService]
    });
  });

  it('should be created', inject([ConsultervisasService], (service: ConsultervisasService) => {
    expect(service).toBeTruthy();
  }));
});
