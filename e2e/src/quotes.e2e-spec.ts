
import { browser, logging } from 'protractor';
import { QuotesPage } from './quotes.po';

describe('workspace-project App Quotes', () => {
  let page: QuotesPage;

  beforeEach(() => {
    page = new QuotesPage();
    page.navigateTo();
    page.getQuoteMenu().click();
    browser.waitForAngular();


  });
  it('should see quotes', () => {
    browser.driver.sleep(3000);
    browser.waitForAngular();
    console.log(page.getQuoteText());
    expect(page.getQuoteText()).toEqual('Todays Quote');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
