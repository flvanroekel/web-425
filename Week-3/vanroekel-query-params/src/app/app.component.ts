/*
; ==============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   16 Jan 2020
; Description: Exercise 3.2 
;===============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vanroekel-query-params';
  userId = 1000;
}