/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit {
  userQuiz1: any;
  userQuiz2: any;
  userQuiz3: any;
  recordLength: number;
  authUser: string;
  employees: any;
  quizResults: any;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authUser = this.cookie.get("employeeID");
    this.http.get("/api/employees").subscribe(
      res => {
        this.employees = res;
      },
      err => {
        console.log(err);
      },
      () => {
        this.http.get("/api/quiz-results").subscribe(
          res => {
            this.quizResults = res;
            this.lengthCalc(res);
            for (let i = 0; i < this.recordLength; i++) {
              if (
                this.authUser === res[i].employeeId &&
                res[i].quizId === "1"
              ) {
                this.userQuiz1 = res[i];
              } else if (
                this.authUser === res[i].employeeId &&
                res[i].quizId === "2"
              ) {
                this.userQuiz2 = res[i];
              } else if (
                this.authUser === res[i].employeeId &&
                res[i].quizId === "3"
              ) {
                this.userQuiz3 = res[i];
              }
            }
          },
          err => {
            console.log(err);
            this.router.navigate(["/"]);
          }
        );
      }
    );
  }

  lengthCalc(response) {
    let key: any;
    this.recordLength = 0;
    for (key in response) {
      if (response.hasOwnProperty(key)) {
        this.recordLength++;
      }
    }
  }
}
