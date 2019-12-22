/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   22 Dec 2019
; Description: Assignment-1.5-Modules
;===========================================  
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShippingModule } from './shipping/shipping.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
