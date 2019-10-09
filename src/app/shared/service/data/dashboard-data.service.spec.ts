import { TestBed } from '@angular/core/testing';

import { DashboardDataService } from './dashboard-data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardDataService = TestBed.get(DashboardDataService);
    expect(service).toBeTruthy();
  });
});
