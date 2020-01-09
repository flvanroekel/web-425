/*
; ============================================
; Title:  app.module.ts
; Author: Faye Van Roekel
; Date:   09 Jan 2020
; Description: Two-Way Binding
;=============================================  
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }