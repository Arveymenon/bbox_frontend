import { TestBed } from '@angular/core/testing';

import { ActiveStateService } from './active-state.service';

describe('ActiveStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveStateService = TestBed.get(ActiveStateService);
    expect(service).toBeTruthy();
  });
});
