/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   20 Dec 2019
; Description: Exercise-1.3 - Angular CLI
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}