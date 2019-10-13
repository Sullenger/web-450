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
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.css"]
})
export class BaseLayoutComponent implements OnInit {
  constructor(private cookie: CookieService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.cookie.deleteAll()
    this.router.navigate(["/session/login"]);
  }

  navHome() {
    this.router.navigate(["/"]);
  }

  navSummary() {
    this.router.navigate(["/summary"]);
  }
}
