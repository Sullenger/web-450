import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopicSelectionComponent } from './topic-selection/topic-selection.component';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
