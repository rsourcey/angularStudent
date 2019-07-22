import { StudentService } from './../shared/student.service';
import { Student } from './../shared/student.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[];
  popsi = ['bang bang','mamamoo','yeyeye'];
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit() {
    this.loadAllStudents();
  }

  loadAllStudents(){
    this.studentService.getStudents().subscribe(x=>{
      this.students = x;
      this.students.forEach(function(val){
        console.log(val);
      })
      if(this.students == null){
        console.log('ohayo');
      }
    });
  }

  reRoute(student:Student){
    this.router.navigateByUrl(`enrollment?id=${student.id}`);

  }

}
