import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }


  public getQuotes(): Observable<HttpResponse<any>> {
    return this.http.get<any>('https://quotes.rest/qod', {
      params: {language: 'en'}
      // , observe: 'response'
    }).pipe(
      catchError(this.handleError('quotesApi', []))
    );
  }
  private handleError(operation = 'operation', result) {
    return (error: any): Observable<any> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    result = {
      status: error.status,
      errorCode: error.statusText
    };
    console.log(result);
    return of(result);
    };
  }
}
