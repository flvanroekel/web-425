/*
; ============================================
; Title:  about.component.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   09 Jan 2020
; Description: Assignment 2.4
;=============================================  
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h1>
          You have reached the About page!
        </h1>
      </div>
    </div>
  `,
  styles: [
    `
      body: {
        margin-top: 20px;
      }
      h1 {
        text-align: center;
        color: red;
        animation: zoominoutabout 10s forwards;
      }
      @keyframes zoominoutabout {
        0% {
          transform: scale(1,1);
        }
        50% {
          transform: scale(1.5,1.5);
        }
        100%{
          transform: scale(1,1);
        }
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}