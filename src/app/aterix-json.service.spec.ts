import { TestBed } from '@angular/core/testing';

import { AterixJsonService } from './aterix-json.service';

describe('AterixJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AterixJsonService = TestBed.get(AterixJsonService);
    expect(service).toBeTruthy();
  });
});
