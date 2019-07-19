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

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    LoginInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentService,
    LogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
