
import { EnrollmentService } from './shared/enrollment.service';
import { LogInService } from './shared/log-in.service';
import { StudentService } from './shared/student.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginInComponent } from './login-in/login-in.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootrapPracticeComponent } from './bootrap-practice/bootrap-practice.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudentListRowComponent } from './student-list-row/student-list-row.component';
import { EnrollmentDeleteComponent } from './enrollment-delete/enrollment-delete.component';
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    LoginInComponent,
    StudentListComponent,
    BootrapPracticeComponent,
    EnrollmentComponent,
    StudentListRowComponent,
    EnrollmentDeleteComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    StudentService,
    LogInService,
    EnrollmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
