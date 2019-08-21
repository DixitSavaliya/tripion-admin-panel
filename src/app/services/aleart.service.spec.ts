import { TestBed } from '@angular/core/testing';

import { AleartService } from './aleart.service';

describe('AleartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AleartService = TestBed.get(AleartService);
    expect(service).toBeTruthy();
  });
});
