/*
=======================================
  ; Title: fruit.component.ts
  ; Author: Richard Krasso
  ; Date: 22 January 2020
  ; Modified By: Faye Van Roekel
  ; Description: fruit.component.ts
========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  template: `
    <p>
      fruit is working!
    </p>
  `,
  styles: []
})
export class FruitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}