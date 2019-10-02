/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topic-selection",
  templateUrl: "./topic-selection.component.html",
  styleUrls: ["./topic-selection.component.css"]
})
export class TopicSelectionComponent implements OnInit {

  quizzes: any;

  constructor() {
    this.quizzes = [
      {id: 1, name:"2 Pizza Team Rule"},
      {id: 2, name:"JavaScript - N00b edition"},
      {id: 3, name:"SOA/ESB"}
    ]
  }

  ngOnInit() {}

}






