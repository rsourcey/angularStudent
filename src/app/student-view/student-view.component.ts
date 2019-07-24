import { Course } from './../shared/course.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from './../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  _student: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
  id:string;
  student:Observable<Student> = this._student.asObservable();
  studyante:Student;
  courses:any;
  isDataLoaded:boolean;
  constructor(private service:StudentService, 
    private router:ActivatedRoute,
    private router2:Router) { }

  ngOnInit() {
    //get params
    this.id = this.router.snapshot.paramMap.get('id');
    console.log("Id = " + this.id);
    this.service.getStudent(this.id).subscribe(data => {
      this._student.next(data);  
      this.studyante = this._student.value;
      this.courses = this.studyante.enrollments;
      this.isDataLoaded = true;

      console.log(data);
    });
    
  }

  delete(student:Student, course:Course){
    //  this.router.navigateByUrl(`enrollment?id=${student.id}&request=${"delete"}`);
    this.router2.navigate(['enrollment-delete',{id:student.id, courseId:course.id, courseName:course.name}]);

  }

}
