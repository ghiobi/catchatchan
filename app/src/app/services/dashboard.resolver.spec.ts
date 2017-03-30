import { TestBed, inject } from '@angular/core/testing';

import { DashboardResolver } from './dashboard.resolver';

describe('DashboardResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardResolver]
    });
  });

  it('should ...', inject([DashboardResolver], (service: DashboardResolver) => {
    expect(service).toBeTruthy();
  }));
});
