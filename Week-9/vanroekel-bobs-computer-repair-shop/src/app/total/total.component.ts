/*
==============================================
; Title: total.component.ts
; Date: 19 February 2020
; Author: Faye Van Roekel
; Description: total.component.ts
;=============================================
*/
import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit() {
  }

}