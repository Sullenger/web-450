/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Node Quiz';

  constructor(private cookie: CookieService) {

  }
}
