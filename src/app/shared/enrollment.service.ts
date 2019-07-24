import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Enrollment } from './enrollment.model';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course.model';





export class EnrollmentService {
  api:string = "https://ys-training-api.herokuapp.com/";
  responseStatus:number;
   options = {
    headers: new HttpHeaders({
      Authorization:`Bearer ${localStorage.getItem('currentUser')}`,
    }),
    body:{}
  };
  constructor(private http:HttpClient) { }

  postEnrollment(enrollment:Enrollment):Observable<Object>{
    
    return this.http.post<Object>(this.api + `api/students/${enrollment.id}/enrollments`, enrollment, this.options);
  }

  deleteEnrollment(enrollment:Enrollment):Observable<Object>{
    this.options.body = enrollment;
    return this.http.delete<Object>(this.api + `api/students/${enrollment.id}/enrollments`, this.options);
  }


}
