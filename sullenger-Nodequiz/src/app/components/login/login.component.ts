/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  userLogin: string;
  form: FormGroup;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ]
    });
  }

  onSubmit(submit) {
    const employeeId = submit.employeeId;
    // const employeeId = this.form.controls["employeeId"].value;

    this.http.get("/api/employees/" + employeeId).subscribe(res => {
      if (res) {
        this.cookie.set("isAuthenticated", "true", 7);
        this.cookie.set("employeeID", employeeId, 7);
        this.router.navigate(["/"]);
      } else {
        this.errorMessage = "Invalid Employee ID";
      }
    });
  }
}
