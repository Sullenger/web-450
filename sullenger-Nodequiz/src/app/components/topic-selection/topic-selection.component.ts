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

@Component({
  selector: "app-topic-selection",
  templateUrl: "./topic-selection.component.html",
  styleUrls: ["./topic-selection.component.css"]
})
export class TopicSelectionComponent implements OnInit {
  quizzes: any;
  employeeId: string;
  user: any;

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.quizzes = [
      { id: 1, name: "2 Pizza Team Rule" },
      { id: 2, name: "JavaScript - N00b edition" },
      { id: 3, name: "SOA/ESB" }
    ];
  }

  ngOnInit() {
    this.employeeId = this.cookie.get("employeeID");
    this.http.get("/api/employees/" + this.employeeId).subscribe(res => {
      this.user = res;
    });
  }
}
