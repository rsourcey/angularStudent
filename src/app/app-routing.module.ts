import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginInComponent } from './login-in/login-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootrapPracticeComponent } from './bootrap-practice/bootrap-practice.component';


const routes: Routes = [
  {path:'login', component:LoginInComponent},
  {path:'register', component:StudentRegistrationComponent},
  {path:'student-list', component:StudentListComponent},
  {path:'bootstrap', component:BootrapPracticeComponent},
  {path:'enrollment', component:EnrollmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
