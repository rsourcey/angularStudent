import { EnrollmentService } from './../shared/enrollment.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment-delete',
  templateUrl: './enrollment-delete.component.html',
  styleUrls: ['./enrollment-delete.component.css']
})
export class EnrollmentDeleteComponent implements OnInit {
  studentId:string;
  courseId:string;
  courseName:string;
  constructor(private route:ActivatedRoute, private service:EnrollmentService) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.courseName = this.route.snapshot.paramMap.get('courseName');
    this.studentId = this.route.snapshot.paramMap.get('id');
    
  }

  onDelete(formData):void{
    formData.id = this.studentId;
    formData.courseId = this.courseId;
    this.service.deleteEnrollment(formData).subscribe(
      data => console.log('yes!'),
      err => console.log('oopsy!')
    );
  }

}
