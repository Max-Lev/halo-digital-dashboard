import { TestBed, inject } from '@angular/core/testing';

import { VoteCounterService } from './vote-counter.service';

describe('VoteCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteCounterService]
    });
  });

  it('should be created', inject([VoteCounterService], (service: VoteCounterService) => {
    expect(service).toBeTruthy();
  }));
});
