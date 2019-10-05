import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizSelection: number;
  errorMessage: string;
  quizBody: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizSelection = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.http.get("/api/quiz_bank/" + this.quizSelection).subscribe(res => {
      if (res) {
        this.quizBody = res;
        console.log(this.quizBody);
      } else {
        this.errorMessage = "We encountered an error retrieving your quiz";
      }
    });
  }
}
