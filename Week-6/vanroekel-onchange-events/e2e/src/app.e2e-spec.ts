/*
=======================================
  ; Title: app.e2e-spec.ts
  ; Author: Richard Krasso
  ; Date: February 5, 2020
  ; Modified By: Faye Van Roekel
  ; Description: app.e2d-spec.ts
========================================
*/
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to vanroekel-onchange-events!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});