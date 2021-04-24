import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = {};
  constructor( private quote: QuoteService) {

  }

  ngOnInit() {
    this.quote.getQuotes().subscribe(
      (data) => this.quotes = data);
  }

}
