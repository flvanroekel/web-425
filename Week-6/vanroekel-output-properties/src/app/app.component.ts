/*
=======================================
  ; Title: app.component.ts
  ; Author: Richard Krasso
  ; Date: February 5, 2020
  ; Modified By: Faye Van Roekel
  ; Description: app.component.ts
========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thomason-output-properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote){
    this.priceQuote = event;
  }
}