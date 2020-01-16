/*
; ================================================
; Title:  e404.component.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   16 Jan 2020
; Description: Exercise 3.2 
;=================================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>You have reached an incorrect page.</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin: 20px auto;
      border: double 4px blue;
      width: 60%;
    }
    h2 {
      padding: 10px;
      background-color: darkblue;
      color: lightblue;
    }
    `
  ]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}