/*
=======================================
  ; Title: order.component.ts
  ; Author: Richard Krasso
  ; Date: February 5, 2020
  ; Modified By: Faye Van Roekel
  ; Description: order.component.ts
========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: [`
  :host{
    background-color: cyan;
  }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}