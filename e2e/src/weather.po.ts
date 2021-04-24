import { browser, by, element } from 'protractor';

export class WeatherPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  getWeatherMenu() {

    return element(by.css('app-root .nav li:nth-child(2) a'));
  }

  getLocationInput() {
    return element(by.css('app-weather input[id="location"]'));
  }

  getSubmitButton() {
    return element(by.css('app-weather button[type="submit"]'));
  }

  getResultString() {
    return element(by.css('app-weather .tempDetails')).getText() as Promise<string>;

  }
}
