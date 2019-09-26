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
import { LoginComponent } from './login/login.component';
import { TopicSelectionComponent } from './topic-selection/topic-selection.component'

export const AppRoutes: Routes = [
  { path: "home", component: LoginComponent },
  { path: "quizSelection", component: TopicSelectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, TopicSelectionComponent]
