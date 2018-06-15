import { TestBed, inject } from '@angular/core/testing';

import { usermgmtsService } from './usermgmts.service';

describe('usermgmtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [usermgmtsService]
    });
  });

  it('should ...', inject([usermgmtsService], (service: usermgmtsService) => {
    expect(service).toBeTruthy();
  }));
});
