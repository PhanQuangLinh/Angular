import { TestBed } from '@angular/core/testing';

import { Day10Guard } from './day10.guard';

describe('Day10Guard', () => {
  let guard: Day10Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Day10Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
