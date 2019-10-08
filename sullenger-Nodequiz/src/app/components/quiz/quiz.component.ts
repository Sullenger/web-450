/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {FormControl, FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizSelection: number;
  errorMessage: string;
  quizBody: any;
  score: number;

  public order = {
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
  };



  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizSelection = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.http.get("/api/quiz_bank/" + this.quizSelection).subscribe(res => {
      if (res) {
        this.quizBody = res;
        console.log(this.quizBody);
        // console.log(this.quizBody.quiz_Questions[0]);
        // for(let i=0; i<10; i++){
        //   let iteration = "question"+(i+1);
        //   this.order[iteration].submittedAnswer = this.quizBody.quiz_Questions[i].quiz_answers.correct_Answer;
        //   console.log(this.order[iteration].submittedAnswer)
        // }
      } else {
        this.errorMessage = "We encountered an error retrieving your quiz";
      }
    });
  }
  onSubmit(formData) {
    console.log(formData)
    if(formData){
      for(let i=1; i<11; i++){
        let iteration = "question"+i;
        this.order[iteration].submittedAnswer = formData[iteration].submittedAnswer;
        if(this.order[iteration].submittedAnswer === this.order[iteration].correctAnswer){
          this.score += 1;
        }
      }
    }
  }
}
