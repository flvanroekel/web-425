/*
; ==============================================
; Title:  home.component.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   16 Jan 2020
; Description: Exercise 3.2 =
;===============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>This is my <u>Home Page</u>. You have reached it successfully.</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
      background-color: orange;
    }
    h2 {
      color: red;
    }
    u {
      color: darkred;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}