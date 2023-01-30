import { TestBed } from '@angular/core/testing';

import { GamerGuard } from './gamer.guard';

describe('GamerGuard', () => {
  let guard: GamerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GamerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
