import { TestBed } from '@angular/core/testing';

import { OEDataService } from './oe-data.service';

describe('OEDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OEDataService = TestBed.get(OEDataService);
    expect(service).toBeTruthy();
  });
});
