import { TestBed } from '@angular/core/testing';

import { GraphqlServiceService } from './graphql-service.service';

describe('GraphqlServiceService', () => {
  let service: GraphqlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
