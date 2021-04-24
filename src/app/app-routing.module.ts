import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ErrorOopsComponent } from './error-oops/error-oops.component';

const routes: Routes =  [
  { path: 'weather', component: WeatherComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'error', component: ErrorHandlingComponent },
  { path: 'error-oops', component: ErrorOopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
