import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Enrollment } from './enrollment.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpHeader = {
  headers: new HttpHeaders({
    Authorization:`Bearer ${localStorage.getItem('currentUser')}`

  })
};

export class EnrollmentService {
  api:string = "https://ys-training-api.herokuapp.com/";
  responseStatus:number;
  constructor(private http:HttpClient) { }

  postEnrollment(enrollment:Enrollment):Observable<Object>{
    return this.http.post<Object>(this.api + `api/students/${enrollment.id}/enrollments`, enrollment, httpHeader);

  }
}
