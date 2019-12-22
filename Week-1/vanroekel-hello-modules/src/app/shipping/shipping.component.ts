/*
; ============================================
; Title:  shipping.component.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   22 Dec 2019
; Description: Exercise-1.5-Modules
;===========================================  
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      This is Faye's Shipping Component.
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}