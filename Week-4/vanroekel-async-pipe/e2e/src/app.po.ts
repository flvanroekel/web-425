/*
=======================================
  ; Title: app.po.ts
  ; Author: Richard Krasso
  ; Date: 22 January 2020
  ; Modified By: Faye Van Roekel
  ; Description: app.po.ts
========================================
*/


import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}