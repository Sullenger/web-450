/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz-results",
  templateUrl: "./quiz-results.component.html",
  styleUrls: ["./quiz-results.component.css"]
})
export class QuizResultsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<QuizComponent>,
    private router: Router
  ) {}
  @Input() public quizResults;

  ngOnInit() {
    console.log(this.quizResults);
  }

  close() {
    this.dialogRef.close();
    this.router.navigate(["/"]);
  }

  summary() {
    this.dialogRef.close();
    this.router.navigate(["/summary"]);
  }
}
