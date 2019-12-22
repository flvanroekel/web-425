/*
=====================================
 ; Title: vanroekel-assignment-1.4.ts
 ; Author: Richard Krasso
 ; Date: 22 Dec 2019
 ; Modified By: Faye Van Roekel
 ; Description: Typescript example
======================================
*/
let make: string = "Ford";
let model: string = "Explorer";

//message funtion
function message(one: string, two: string): string
{ 
    return 'My new car is a ' + one + " " + two + ' Sport.'; 
}

//Output
console.log(message(make, model));
