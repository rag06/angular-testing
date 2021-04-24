import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { WeatherService } from '../weather.service';
import ucv_data from '../../assets/user.json';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: any;
  weather : Form;
  location: string;
  users = [];
  constructor(private weathers: WeatherService) {

   }

  ngOnInit() {
    this.users = ucv_data;
  }
  onSubmit(data) {
    if (data.valid) {
      console.log('hi weather component');
      console.log(data.value.location);
      this.weathers.getWeatherDetails(data.value.location).subscribe(
        (data) => this.weatherData =data);
      console.log('hi weather service return');
      console.log( this.weatherData );
      // data.reset();

    }
  }
}
