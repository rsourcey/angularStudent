import { EnrollmentService } from './../shared/enrollment.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  studentId:string;
  request:string;
  constructor(private enrollmentService:EnrollmentService, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params =>
    //   this.studentId=params['id'],
    //   // this.request=params['request']
    //   );
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.request = this.route.snapshot.paramMap.get('request');
    console.log("id mo = " + this.studentId + this.request );
  }

  onSubmit(formData):void{
    formData.id = this.studentId;
    this.enrollmentService.postEnrollment(formData).subscribe(
      data => console.log('yes!'),
      err => console.log('oopsy!'));
  }

  onDelete(formData):void{
    formData.id = this.studentId;
    this.enrollmentService.deleteEnrollment(formData).subscribe(
      data => console.log('yes!'),
      err => console.log('oopsy!')
    );
  }
}
