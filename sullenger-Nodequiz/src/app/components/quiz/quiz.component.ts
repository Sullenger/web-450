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
import { QuizResultsComponent } from "../quiz-results/quiz-results.component"
// import { FormControl, FormGroup } from "@angular/forms";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  quizSelection: number;
  errorMessage: string;
  quizBody: any;
  score: number;

  public userData = {
    score: 0,
    employeeID: null
  };

  public answerBank = {
    question1: { question: "", correctAnswer: "", submittedAnswer: "" },
    question2: { question: "", correctAnswer: "", submittedAnswer: "" },
    question3: { question: "", correctAnswer: "", submittedAnswer: "" },
    question4: { question: "", correctAnswer: "", submittedAnswer: "" },
    question5: { question: "", correctAnswer: "", submittedAnswer: "" },
    question6: { question: "", correctAnswer: "", submittedAnswer: "" },
    question7: { question: "", correctAnswer: "", submittedAnswer: "" },
    question8: { question: "", correctAnswer: "", submittedAnswer: "" },
    question9: { question: "", correctAnswer: "", submittedAnswer: "" },
    question10: { question: "", correctAnswer: "", submittedAnswer: "" }
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cookie: CookieService,
    public dialog: MatDialog
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    const quizModal = this.dialog.open(QuizResultsComponent, {
      width: "50%",
      height: "80%"
    });

    quizModal.componentInstance.answerBank = this.answerBank;
    quizModal.componentInstance.userData = this.userData;
  }

  ngOnInit() {
    this.quizSelection = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.http.get("/api/quiz_bank/" + this.quizSelection).subscribe(res => {
      if (res) {
        this.quizBody = res;
        console.log(this.quizBody);
        this.userData.employeeID = this.cookie.get("employeeID");
        for (let i = 0; i < 10; i++) {
          let iteration = "question" + (i + 1);
          this.answerBank[
            iteration
          ].correctAnswer = this.quizBody.quiz_Questions[
            i
          ].quiz_Answers.correct_Answer;
          this.answerBank[iteration].question = this.quizBody.quiz_Questions[i].question;
        }
      } else {
        this.errorMessage = "We encountered an error retrieving your quiz";
      }
    });
  }
  onSubmit(formData) {
    if (formData) {
      for (let i = 1; i < 11; i++) {
        let iteration = "question" + i;
        this.answerBank[iteration].submittedAnswer =
          formData.answerBank[iteration];
        if (
          this.answerBank[iteration].submittedAnswer ===
          this.answerBank[iteration].correctAnswer
        ) {
          this.userData.score += 1;
        }
      }
      this.openDialog();
    }
  }
}
