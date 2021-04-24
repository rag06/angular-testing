import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteService } from './quote.service';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';
import { ErrorOopsComponent } from './error-oops/error-oops.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuotesComponent,
    ErrorHandlingComponent,
    ErrorOopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    WeatherService,
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
