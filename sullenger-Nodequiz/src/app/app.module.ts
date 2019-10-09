/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { BaseLayoutComponent } from "./shared";
import { LoginComponent } from "./components/login/login.component";
import { TopicSelectionComponent } from "./components/topic-selection/topic-selection.component";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatRadioModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { SummaryComponent } from "./components/summary/summary.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { CookieService } from "ngx-cookie-service";
import { HttpClientModule } from "@angular/common/http";
import { PresentationComponent } from './components/presentation/presentation.component';
import { CarouselModule } from 'primeng/carousel';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    LoginComponent,
    TopicSelectionComponent,
    SummaryComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    PresentationComponent,
    QuizComponent,
    QuizResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    CarouselModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [QuizResultsComponent]
})
export class AppModule {}
