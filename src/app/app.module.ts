import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteService } from './quote.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [WeatherService, QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
