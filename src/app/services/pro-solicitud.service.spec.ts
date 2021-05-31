import { TestBed } from '@angular/core/testing';

import { ProSolicitudService } from './pro-solicitud.service';

describe('ProSolicitudService', () => {
  let service: ProSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
