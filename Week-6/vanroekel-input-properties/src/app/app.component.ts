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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vanroekel-input-properties';
  
  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
