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
  recordLength: number;
  parsedQuiz: string;
  authUser: string;
  employees: any;
  quizResults: any;
  testArray: [];

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {}

  ngOnInit() {
    this.authUser = this.cookie.get("employeeID");
    this.http.get("/api/employees").subscribe(res => {
      this.employees = res
    }, err => {
      console.log(err);
    }, () => {
      this.http.get("/api/quiz-results").subscribe(res => {
        this.lengthCalc(res);
        for(let i=0; i<this.recordLength; i++){
          console.log(res[i].result);
          let parsedResult = JSON.parse(res[i].result);
          console.log(parsedResult);
        }
        console.log(this.quizResults)
      }, err => {
        console.log(err);
        // this.router.navigate(["/"]); //Uncomment after testing
      })
    });
  }

  lengthCalc(response){
    let key: any;
    this.recordLength = 0
    for (key in response) {
      if (response.hasOwnProperty(key)){
        this.recordLength++;
      }
  }
  console.log("Res Length " + this.recordLength)
  }


}
