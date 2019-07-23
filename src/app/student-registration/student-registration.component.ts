import { Router } from '@angular/router';
import { LogInService } from './../shared/log-in.service';
import { StudentService } from '../shared/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  student:Student;

  constructor(private studentService:StudentService, 
    private loginService:LogInService,
    private router:Router) { }

  ngOnInit() {
  }

  onSubmit(formData):void{
    this.studentService.postStudent(formData).subscribe(
      stud => {
        this.student = stud;
        this.loginService.logIn(formData);
        alert('Registration succcess');
        this.router.navigate(['student-list']);
      },
      err => alert('Registration failed!'));
    
  }
}


