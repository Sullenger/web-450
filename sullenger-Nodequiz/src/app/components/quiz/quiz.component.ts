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
import { FormControl, FormGroup } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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

  public answerBank = {
    question1: { correctAnswer: "", submittedAnswer: "" },
    question2: { correctAnswer: "", submittedAnswer: "" },
    question3: { correctAnswer: "", submittedAnswer: "" },
    question4: { correctAnswer: "", submittedAnswer: "" },
    question5: { correctAnswer: "", submittedAnswer: "" },
    question6: { correctAnswer: "", submittedAnswer: "" },
    question7: { correctAnswer: "", submittedAnswer: "" },
    question8: { correctAnswer: "", submittedAnswer: "" },
    question9: { correctAnswer: "", submittedAnswer: "" },
    question10: { correctAnswer: "", submittedAnswer: "" },
    score: 0,
    employeeID: null
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.quizSelection = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.http.get("/api/quiz_bank/" + this.quizSelection).subscribe(res => {
      if (res) {
        this.quizBody = res;
        console.log(this.quizBody);
        this.answerBank.employeeID = this.cookie.get("employeeID");
        for (let i = 0; i < 10; i++) {
          let iteration = "question" + (i + 1);
          this.answerBank[
            iteration
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
    console.log(formData);
    if (formData) {
      for (let i = 1; i < 11; i++) {
        let iteration = "question" + i;
        this.answerBank[iteration].submittedAnswer =
          formData.answerBank[iteration];
        if (
          this.answerBank[iteration].submittedAnswer ===
          this.answerBank[iteration].correctAnswer
        ) {
          this.answerBank.score += 1;
        }
      }
      console.log(this.answerBank);
    }
  }
}
