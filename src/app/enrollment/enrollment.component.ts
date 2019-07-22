import { map } from 'rxjs/operators';
import { EnrollmentService } from './../shared/enrollment.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  studentId:number;
  constructor(private enrollmentService:EnrollmentService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>this.studentId=params['id']);
    console.log("id mo = " + this.studentId );
  }

  onSubmit(formData):void{
    formData.id = this.studentId;
    this.enrollmentService.postEnrollment(formData).subscribe(
      data => console.log('yes!'),
      err => console.log('oopsy!'));
  }



}
