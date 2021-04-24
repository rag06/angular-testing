import { Injectable } from '@angular/core';
import { of } from 'rxjs';



const result = {"coord":{"lon":72.8479,"lat":19.0144},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":302.15,"feels_like":307.68,"temp_min":302.15,"temp_max":302.15,"pressure":1010,"humidity":79},"visibility":4000,"wind":{"speed":3.09,"deg":340},"clouds":{"all":40},"dt":1619290207,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1619311456,"sunset":1619357315},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200};
@Injectable({
  providedIn: 'root'
})


export class WeatherServiceMock {

  constructor() { }

  public getWeatherDetails(location) {
    return of(result);
  }
}
