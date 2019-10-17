import { TestBed } from '@angular/core/testing';

import { ServiceOfferingService } from './service-offering.service';

describe('ServiceOfferingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOfferingService = TestBed.get(ServiceOfferingService);
    expect(service).toBeTruthy();
  });
});
