import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesComponent } from './quotes.component';
import { QuoteService } from '../quote.service';
import { QuotesServiceMock } from '../mocks/quotes.service.mock';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesComponent ],
      imports: [
        
      ],
      providers: [
        { provide: QuoteService, useClass: QuotesServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have one quotes`, async(() => {
    expect(component.quotes['contents'].quotes.length).toEqual(1);
}));

});
