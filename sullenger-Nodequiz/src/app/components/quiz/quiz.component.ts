/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { QuizResultsComponent } from "../quiz-results/quiz-results.component";
import * as moment from 'moment';
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  quizSelection: number;
  errorMessage: string;
  quizBody: any;


  public quizResults = {
    questions: [
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" },
      { question: "", correctAnswer: "", submittedAnswer: "" }
    ],
    userData:[
      {score: 0},
      {employeeId: null},
      {date: ""},
    ]
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cookie: CookieService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    const quizModal = this.dialog.open(QuizResultsComponent, {
      width: "60%",
      height: "90%",
      disableClose: true
    });

    quizModal.componentInstance.quizResults = this.quizResults;
  }

  ngOnInit() {
    this.quizSelection = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.http.get("/api/quiz_bank/" + this.quizSelection).subscribe(res => {
      if (res) {
        this.quizBody = res;
        this.quizResults.userData[1].employeeId = this.cookie.get("employeeID");
        // this.quizResults.userData.employeeID = this.cookie.get("employeeID");
        for (let i = 0; i < 10; i++) {
          this.quizResults.questions[i].question = this.quizBody.quiz_Questions[
            i
          ].question;
          this.quizResults.questions[
            i
          ].correctAnswer = this.quizBody.quiz_Questions[
            i
          ].quiz_Answers.correct_Answer;
        }
      } else {
        this.errorMessage = "We encountered an error retrieving your quiz";
      }
    });
  }

  onSubmit(formData) {
    if (formData) {
      this.quizResults.userData[2].date = moment().format("DD/MM/YYYY")
      for (let i = 0; i < 10; i++) {
        let iteration = "question" + (i + 1);
        this.quizResults.questions[i].submittedAnswer =
          formData.answerBank[iteration];
        if (
          this.quizResults.questions[i].submittedAnswer ===
          this.quizResults.questions[i].correctAnswer
        ) {
          this.quizResults.userData[0].score += 1;
          console.log(this.quizResults.userData[0].score)
        }
      }
      this.http.post("/api/quiz/"+ this.quizSelection + "/quiz-results", {
        employeeId: this.quizResults.userData[1].employeeId,
        quizId: this.quizSelection,
        result: JSON.stringify(this.quizResults)
      }).subscribe(res => {

      }, err => {
        console.log(err);
        this.router.navigate(["/"]);
      }, () =>{
        // console.log("On Success - " + this.quizResults)
        this.openDialog();
      })

    }
  }
}
