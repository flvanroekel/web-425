/*
; ============================================
; Title:  shipping.module.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   22 Dec 2019
; Description: Exercise-1.5-Modules
;===========================================  
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }