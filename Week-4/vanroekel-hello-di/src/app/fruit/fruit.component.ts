/*
========================================
  ; Title: fruit.component.ts
  ; Author: Richard Krasso
  ; Date: 22 January 2020
  ; Modified By: Faye Van Roekel
  ; Description: fruit.component.ts
=========================================
*/

import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styles: [`
    .tbl-header {
      background-color:lightpink;
      color:white;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {
  fruit: Fruit;
  fruitArray: Fruit[];
  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
    this.fruitArray = fruitService.getFruitList();

  }

  ngOnInit() {
  }
}