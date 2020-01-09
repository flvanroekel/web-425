/*
;===================================
; Title:  app.component.ts
; Author: Richard Krasso
; Date:   09 Jan 2020
; Modified By: Faye Van Roekel
; Description: app component
;===================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change name</button>
  `,
  styles: [
    `
    h1 {
      color: red; 
    }
    `
  ]
})
export class AppComponent {
  title = 'app';

  // class property
  name:string = "Professor Krasso";
  
  // change name function
  changeName() {
    this.name = "Richard Krasso";
  }
}
