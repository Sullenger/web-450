import { Component, OnInit, Input } from "@angular/core";



@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.css"]
})
export class PresentationComponent implements OnInit {

  @Input() public selectedQuiz;

  constructor() {}

  ngOnInit() {

  }
}
