/*
========================================
  ; Title: fruit.service.ts
  ; Author: Richard Krasso
  ; Date: 22 January 2020
  ; Modified By: Faye Van Roekel
  ; Description: fruit.service.ts
=========================================
*/
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(1, "Melon", "Watermelon");
  }

  getFruitList(): Fruit[] {

    var f1 = new Fruit(1, "Pineapple", "Yellow");
    var f2 = new Fruit(2, "Kiwi", "Green");
    var f3 = new Fruit(3, "Mango", "Orange");
    type arrFruit = Array<Fruit>;
    var fruitArray: arrFruit = [
      f1, f2, f3
    ]

    return fruitArray;
  }
  constructor() { }
}