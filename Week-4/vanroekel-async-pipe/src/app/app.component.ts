/*
=======================================
  ; Title: app.component.ts
  ; Author: Richard Krasso
  ; Date: 22 January 2020
  ; Modified By: Faye Van Roekel
  ; Description: app.component.ts
========================================
*/

import { Component } from '@angular/core';
import { FruitService } from './fruit/fruit.service';
import { Observable } from 'rxjs';
import { Fruit } from './fruit/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FruitService]
})
export class AppComponent {
  fruitList: Observable<Fruit[]>;

  constructor(private fruitService: FruitService){ }

  ngOnInit(){
    this.fruitList = this.fruitService.getFruits();
  }
}