import { TestBed } from '@angular/core/testing';

import { ClassesTypeService } from './classes-type.service';

describe('ClassesTypeService', () => {
  let service: ClassesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
