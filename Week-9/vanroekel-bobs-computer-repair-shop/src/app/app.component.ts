/*
==============================================
; Title: app.component.ts
; Date: 19 February 2020
; Author: Faye Van Roekel
; Description: app.component.ts
;=============================================
*/
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material'
import { InvoiceComponent } from './invoice/invoice.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BobsRepairShop';

  constructor(private dialog:MatDialog){

}

getInvoice(){
  this.dialog.open(InvoiceComponent,{

  })

};
}