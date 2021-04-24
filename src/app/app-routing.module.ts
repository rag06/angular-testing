import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes =  [
  { path: 'weather', component: WeatherComponent },
  { path: 'quotes', component: QuotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
