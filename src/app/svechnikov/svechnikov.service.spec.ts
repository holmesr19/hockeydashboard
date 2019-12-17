import { TestBed } from '@angular/core/testing';

import { SvechnikovService } from './svechnikov.service';

describe('SvechnikovService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvechnikovService = TestBed.get(SvechnikovService);
    expect(service).toBeTruthy();
  });
});
