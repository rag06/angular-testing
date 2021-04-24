import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { WeatherServiceMock } from '../mocks/weather.service.mock';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [
          FormsModule,
      ],
      providers: [
        { provide: WeatherService, useClass: WeatherServiceMock }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const locationInput = compiled.querySelector('input[id="location"]');

    expect(locationInput).toBeTruthy();
  });
  it(`should have weather data after on submit`, async(() => {
    component.onSubmit({valid: true, value: {location: 'mumbai'}});
    fixture.detectChanges();
    expect(component.weatherData['main'].temp).toEqual(302.15);
  }));

});
