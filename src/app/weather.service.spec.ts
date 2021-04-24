import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { WeatherServiceMock } from './mocks/weather.service.mock';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ],
    providers: [
      { provide: WeatherService, useClass: WeatherServiceMock}
    ]
  }
  ));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('get Weather should return Observable', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    
    const weatherObs = service.getWeatherDetails('Banglore');
    console.log(weatherObs);
    weatherObs.subscribe( (result) => {
      expect(result['main'].temp).toEqual(302.15);

    });
  });
});
