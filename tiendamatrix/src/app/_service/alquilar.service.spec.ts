import { TestBed } from '@angular/core/testing';

import { AlquilarService } from './alquilar.service';

describe('AlquilarService', () => {
  let service: AlquilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlquilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
