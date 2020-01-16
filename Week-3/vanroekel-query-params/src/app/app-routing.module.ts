/*
; ==============================================
; Title:  app-routing.module.ts
; Author: Richard Krasso
; Modified By: Faye Van Roekel
; Date:   16 Jan 2020
; Description: Exercise 3.2 
;===============================================
*/

import { E404Component } from './e404/e404.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent},
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
