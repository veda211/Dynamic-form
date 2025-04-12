import { TestBed } from '@angular/core/testing';

import { DialougeBoxService } from './dialouge-box.service';

describe('DialougeBoxService', () => {
  let service: DialougeBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialougeBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
