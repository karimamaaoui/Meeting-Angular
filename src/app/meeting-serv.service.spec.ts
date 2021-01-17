import { TestBed } from '@angular/core/testing';

import { MeetingServService } from './meeting-serv.service';

describe('MeetingServService', () => {
  let service: MeetingServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
