
import { browser, logging } from 'protractor';
import { WeatherPage } from './weather.po';

describe('workspace-project App Quotes', () => {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
    page.navigateTo();
    page.getWeatherMenu().click();
    browser.waitForAngular();


  });
  it('should see quotes', () => {
    browser.driver.sleep(3000);
    browser.waitForAngular();
    page.getLocationInput().clear().then( () => {
      page.getLocationInput().sendKeys('Mumbai');
    });
    browser.driver.sleep(1000);
    page.getSubmitButton().click();
    browser.driver.sleep(3000);
    browser.waitForAngular();
    expect(page.getResultString()).toBe('Todays Temp is for Mumbai');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
