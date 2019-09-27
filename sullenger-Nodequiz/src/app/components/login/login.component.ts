/*
============================================
; Title: NodeQuiz, LLC.
; Author: Professor Krasso
; Date: 25 September 2019
; Modified By: Jason Sullenger
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cookie: CookieService) {

  }

  ngOnInit() {
  }
  onSubmit(formData) {
    if (formData.userLogin.employeeId) {
      console.log(formData)
      this.cookie.set('isAuthenticated', 'true', 7)
    }
  }
}
