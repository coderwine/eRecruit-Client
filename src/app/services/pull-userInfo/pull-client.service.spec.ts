import { TestBed } from '@angular/core/testing';

import { PullClientService } from './pull-client.service';

describe('PullClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PullClientService = TestBed.get(PullClientService);
    expect(service).toBeTruthy();
  });
});
