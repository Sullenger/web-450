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
    ]
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
      width: "60%",
      height: "90%"
    });

    quizModal.componentInstance.quizResults = this.quizResults;
    quizModal.componentInstance.userData = this.userData;
  }

  ngOnInit() {
    this.quizSelection = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.http.get("/api/quiz_bank/" + this.quizSelection).subscribe(res => {
      if (res) {
        this.quizBody = res;
        this.userData.employeeID = this.cookie.get("employeeID");
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
    console.log("On Init");
    console.log(this.quizResults);
  }

  onSubmit(formData) {
    if (formData) {
      console.log("Pre formdata");
      console.log(formData);
      for (let i = 0; i < 10; i++) {
        let iteration = "question" + (i + 1);
        this.quizResults.questions[i].submittedAnswer =
          formData.answerBank[iteration];
        if (
          this.quizResults.questions[i].submittedAnswer ===
          this.quizResults.questions[i].correctAnswer
        ) {
          this.userData.score += 1;
        }
      }
      this.openDialog();
    }

    // On init
    // this.quizBody = res;
    // console.log(this.quizBody);
    //     this.userData.employeeID = this.cookie.get("employeeID");
    //     for (let i = 0; i < 10; i++) {
    //       let iteration = "question" + (i + 1);
    //       this.quizResults[
    //         iteration
    //       ].correctAnswer = this.quizBody.quiz_Questions[
    //         i
    //       ].quiz_Answers.correct_Answer;
    //       this.quizResults[iteration].question = this.quizBody.quiz_Questions[i].question;
    //     }
    //   } else {
    //     this.errorMessage = "We encountered an error retrieving your quiz";
    //   }
    // });

    // on Submit

    // if (formData) {
    //   for (let i = 1; i < 11; i++) {
    //     let iteration = "question" + i;
    //     this.quizResults[iteration].submittedAnswer =
    //       formData.quizResults[iteration];
    //     if (
    //       this.quizResults[iteration].submittedAnswer ===
    //       this.quizResults[iteration].correctAnswer
    //     ) {
    //       this.userData.score += 1;
    //     }
    //   }
    //   this.openDialog();
    // }
  }
}
