import { TestBed } from '@angular/core/testing';

import { CustomerClientService } from './customer-client.service';

describe('CustomerClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerClientService = TestBed.get(CustomerClientService);
    expect(service).toBeTruthy();
  });
});
