import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  foo = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  normalError() {
    const babies = this.foo['arry'].name;
    console.log("This is normal error without a try catch");
    }

  errorWithCatch() {
    try {
    const babies = this.foo['arry'].name;
    } catch (error) {
    console.log(' — Error is handled gracefully: ', error.name);
    }
    console.log(' — Execution continues without app breaking');
    }

    errorHttp() {
      this.http.get<any>('https://creative.org').subscribe(( res) => {

      });
    }
}
