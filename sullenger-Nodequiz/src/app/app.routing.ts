/*
============================================
; Title: NodeQuiz, LLC.
; Author: Professor Krasso
; Date: 25 September 2019
; Modified By: Jason Sullenger
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {BaseLayoutComponent} from './shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      /*
        New components go here...
       */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
