import { StudentService } from './../shared/student.service';
import { Student } from './../shared/student.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // students:Student[];
  students: Array<Student>;

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit() {
    this.students = new Array<Student>();
    this.loadAllStudents();
  }

  loadAllStudents(){
    this.studentService.getStudents().subscribe((x: Student[])=>{
     
      // x.forEach((st:Student)=>{
      //   st.enrollments === undefined ? st.enrollments = [] : st.enrollments.push(new Course("1", "hello")); 

      //   if (st.enrollments) {
      //     st.enrollments.push(new Course("1", "hello"));
      //     st.enrollments.push(new Course("2", "world"));
      //   }
      // });

      this.students = x;
      // this.students.forEach((student: Student) => {
      //   console.log(student);
      // });
    
      // this.students.forEach((student: Student) => {
      //   console.log('st: ', student.enrollments);
      // });

    });
  }

  reRoute(student:Student){
    //  this.router.navigateByUrl(`enrollment?id=${student.id}&request=${"delete"}`);
    this.router.navigate(['enrollment',{id:student.id,request:'delete'}]);

  }

}
