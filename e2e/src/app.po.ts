import { browser, by, element } from 'protractor';
import { CompteurCmp } from "../compteur/compteur.po";

export class AppPage {
  compteurCmp = new CompteurCmp();
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
