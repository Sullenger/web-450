/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-not-found",
  template: `
    <div class="container">
      <mat-card color="accent" class="form">
        <mat-card-content class="contentGroup">
          <h1 class="contentStyle">Error 404</h1>
          <h3 class="contentStyle">Page not found</h3>
          <button
            class="contentStyle"
            (click)="navHome()"
            mat-raised-button
            color="primary"
          >
            Home
          </button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 100px;
        font-family: Arial, Helvetica, sans-serif;
        width: 40%;
      }

      .form {
        height: 300px;
        margin: 0 auto;
        text-align: center;
        background-color: lightgrey;
      }
      .contentGroup {
        padding-top: 25px;
      }
      .contentStyle {
        display: block;
        width: 50%;
        margin: 20px auto;
      }
    `
  ]
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router, private cookie: CookieService) {}

  ngOnInit() {}

  navHome() {
    const value: string = this.cookie.get("isAuthenticated");
    if (value) {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/session/login"]);
    }
  }
}
