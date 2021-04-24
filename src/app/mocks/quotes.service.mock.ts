import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


const result = {
	success: {
		total: 1
	},
	contents: {
		quotes: [{
			quote: 'When a man is an upright contender, only real people are bound to be around; but if he is a downright pretender, then fake people surround and always abound to be found.',
			length: '169',
			author: 'Anuj Somany',
			tags: ['associates', 'empowerment', 'fake-friends', 'followers', 'inspire', 'people', 'person', 'pretender', 'real', 'true-friends'],
			category: 'inspire',
			language: 'en',
			date: '2021-04-24',
			permalink: 'https://theysaidso.com/quote/anuj-somany-when-a-man-is-an-upright-contender-only-real-people-are-bound-to-be',
			id: 'sCHiMScG2LnYFGs4GUXaTAeF',
			background: 'https://theysaidso.com/img/qod/qod-inspire.jpg',
			title: 'Inspiring Quote of the day'
		}]
	},
	baseurl: 'https://theysaidso.com',
	copyright: {
		year: 2023,
		url: 'https://theysaidso.com'
	}
};

@Injectable()
export class QuotesServiceMock {
  constructor() { }

  public getQuotes(): Observable<any> {
    return of(result);
  }
}
