/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
  <!-- Navbar -->
  <mat-toolbar class="menu" role="header" color="primary">
    <mat-toolbar-row>
      <button mat-button class="toolbar__icon-button mat-button">
        <mat-icon>assessment</mat-icon>
        <span style="margin-left: 5px !important" [routerLink]="['/']"
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
        <button mat-menu-item>
          <mat-icon>perm_contact_calendar</mat-icon>
          <span>My Profile</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Settings</span>
        </button>
        <button mat-menu-item>
          <mat-icon>exit_to_app</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar-row>
  </mat-toolbar>
  <!-- endNavbar -->

    <app-login></app-login>
  `,
  styles: []
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
