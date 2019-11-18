import { TestBed } from '@angular/core/testing';

import { AddproductsService } from './addproducts.service';

describe('AddproductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddproductsService = TestBed.get(AddproductsService);
    expect(service).toBeTruthy();
  });
});
