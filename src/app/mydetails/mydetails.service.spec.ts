import { TestBed, inject } from '@angular/core/testing';

import { MydetailsService } from './mydetails.service';

describe('MydetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MydetailsService]
    });
  });

  it('should be created', inject([MydetailsService], (service: MydetailsService) => {
    expect(service).toBeTruthy();
  }));
});
