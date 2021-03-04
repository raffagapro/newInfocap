import { TestBed } from '@angular/core/testing';

import { ImgListService } from './img-list.service';

describe('ImgListService', () => {
  let service: ImgListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
