import { TestBed } from '@angular/core/testing';

import { PullRecService } from './pull-rec.service';

describe('PullRecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PullRecService = TestBed.get(PullRecService);
    expect(service).toBeTruthy();
  });
});
