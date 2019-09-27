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
import { BaseLayoutComponent } from "./shared";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { TopicSelectionComponent } from "./components/topic-selection/topic-selection.component";
import { AuthGuardService } from "./shared/auth-guard/auth-guard.service";

export const AppRoutes: Routes = [
  {
    path: "session",
    component: AuthLayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "not-found", component: NotFoundComponent }
    ]
  },
  {
    path: "home",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: TopicSelectionComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "summary",
        component: SummaryComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  { path: "**", redirectTo: "session/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
