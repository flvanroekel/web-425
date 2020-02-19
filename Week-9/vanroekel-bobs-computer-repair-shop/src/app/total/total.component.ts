/*
==============================================
; Title: total.component.ts
; Date: 19 February 2020
; Author: Faye Van Roekel
; Description: total.component.ts
;=============================================
*/
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { Inject } from '@angular/core';
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

}