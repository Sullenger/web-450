/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  template: `
  <div>
  <header>
  <!-- Navbar -->
  <mat-toolbar class="menu" role="header" color="primary">
    <mat-toolbar-row>
      <button mat-button class="toolbar__icon-button mat-button">
        <mat-icon>assessment</mat-icon>
        <span style="margin-left: 5px !important" (click)="navHome()"
          >NodeQuiz, LLC</span
        >
      </button>

      <div fxFlex></div>

      <button
        mat-icon-button
        class="toolbar__icon-button"
        [matMenuTriggerFor]="menu"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button (click)="navHome()" mat-menu-item>
          <mat-icon>perm_contact_calendar</mat-icon>
          <span>Landing Page</span>
        </button>
        <button mat-menu-item>
          <mat-icon>list</mat-icon>
          <span>Leaderboards</span>
        </button>
        <button mat-menu-item>
          <mat-icon>exit_to_app</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar-row>
  </mat-toolbar>
  <!-- endNavbar -->

  </header>

  <!-- Main page content -->
  <main>
    <router-outlet></router-outlet>
  </main>

  </div>
  `,
  styles: []
})
export class AuthLayoutComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService,) { }

  ngOnInit() {

  }

  navHome() {
    const value: string = this.cookie.get('isAuthenticated');
    if(value){
      this.router.navigate(["/home"]);
    } else {
      this.router.navigate(["/session/login"]);
    }
  }
}
