/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  // resultsDisplay: any;

  constructor(private dialogRef: MatDialogRef<QuizComponent>, private router: Router) { }
  @Input() public answerBank;
  @Input() public userData;

  ngOnInit() {
    console.log(this.answerBank);
    console.log(this.userData);
    }

  close() {
    this.dialogRef.close();
    this.router.navigate(["/"]);
  }
}
