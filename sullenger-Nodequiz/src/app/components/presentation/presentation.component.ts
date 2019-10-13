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

@Component({
  selector: "app-root",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.css"]
})
export class PresentationComponent implements OnInit {
  presentation: number;
  selection: string;
  presentationName: string;
  presentationSlides = [
    { name: "Slide 1", image: "Slide1.PNG" },
    { name: "Slide 2", image: "Slide2.PNG" },
    { name: "Slide 3", image: "Slide3.PNG" },
    { name: "Slide 4", image: "Slide4.PNG" },
    { name: "Slide 5", image: "Slide5.PNG" },
    { name: "Slide 6", image: "Slide6.PNG" },
    { name: "Slide 7", image: "Slide7.PNG" },
    { name: "Slide 8", image: "Slide8.PNG" },
    { name: "Slide 9", image: "Slide9.PNG" },
    { name: "Slide 10", image: "Slide10.PNG" },
    { name: "Slide 11", image: "Slide11.PNG" },
    { name: "Slide 12", image: "Slide12.PNG" },
    { name: "Slide 13", image: "Slide13.PNG" },
    { name: "Slide 14", image: "Slide14.PNG" }
  ];

  constructor(private route: ActivatedRoute) {
    this.presentation = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    if (this.presentation === 1) {
      this.selection = "sullenger-Nodequiz-2PizzaTeam-presentation";
      this.presentationName = "2 Pizza Team Rule";
    } else if (this.presentation === 2) {
      this.selection = "sullenger-Nodequiz-Javascript-presentation";
      this.presentationName = "JavaScript - N00b Edition";
    } else {
      this.selection = "sullenger-Nodequiz-SOAandESB-presentation";
      this.presentationName = "SOA and ESB";
    }
  }
  ngOnInit() {}
}
