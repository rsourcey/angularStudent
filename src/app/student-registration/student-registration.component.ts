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

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

  onSubmit(formData):void{
    this.studentService.postStudent(formData).subscribe(stud => this.student = stud);
    alert('Your Email is : ' + formData.email);
  }
}


