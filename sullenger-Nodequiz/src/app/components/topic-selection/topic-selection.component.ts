/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-topic-selection",
  templateUrl: "./topic-selection.component.html",
  styleUrls: ["./topic-selection.component.css"]
})
export class TopicSelectionComponent implements OnInit {

  public selectedQuiz: string = "";

  constructor(private router: Router, private cookie: CookieService) {}

  ngOnInit() {}

  quizSelection(quiz: string){
    this.selectedQuiz = quiz;
    this.cookie.set("hasSelectedQuiz", this.selectedQuiz, 1);
    this.router.navigate(["presentation"]);
  }
}






