import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import { QuotesServiceMock } from './mocks/quotes.service.mock';

describe('QuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ],
    providers: [
      { provide: QuoteService, useClass: QuotesServiceMock }
    ]
  }
  ));

  it('should be created', () => {
    const service: QuoteService = TestBed.get(QuoteService);
    expect(service).toBeTruthy();
  });
});
