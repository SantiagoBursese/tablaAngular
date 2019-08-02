import { TestBed } from '@angular/core/testing';

import { ObtenerArregloService } from './obtener-arreglo.service';

describe('ObtenerArregloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerArregloService = TestBed.get(ObtenerArregloService);
    expect(service).toBeTruthy();
  });
});
