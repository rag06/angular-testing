import { browser, by, element } from 'protractor';

export class QuotesPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  getQuoteMenu() {

    return element(by.css('app-root .nav li:nth-child(3) a'));
  }

  getQuoteText() {
    return element(by.css('app-quotes h4')).getText() as Promise<string>;
  }
}
