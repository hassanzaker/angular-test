import { TestBed } from '@angular/core/testing';

import { GraphMakerService } from './graph-maker.service';

describe('GraphMakerService', () => {
  let service: GraphMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
