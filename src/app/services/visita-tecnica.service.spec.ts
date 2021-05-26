import { TestBed } from '@angular/core/testing';

import { VisitaTecnicaService } from './visita-tecnica.service';

describe('VisitaTecnicaService', () => {
  let service: VisitaTecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitaTecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
