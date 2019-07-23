import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from './../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  id:string;
  student:Student;
  course:any;
  constructor(private service:StudentService, private router:ActivatedRoute) { }

  ngOnInit() {
    //get params
    this.id = this.router.snapshot.paramMap.get('id');
    this.service.getStudent(this.id).subscribe(data => {
      this.student = data;
      // this.course = this.student.course
    });
  }

}
