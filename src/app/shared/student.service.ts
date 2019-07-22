import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { Student } from './student.model';
import {HttpHeaders, HttpClient} from '@angular/common/http';

const httpHeader = {
  headers: new HttpHeaders({
    Authorization:`Bearer ${localStorage.getItem('currentUser')}`

  })
};
export class StudentService {
  api:string = "https://ys-training-api.herokuapp.com/";
  constructor(private http:HttpClient) { }
  
  postStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.api + 'api/students', student, httpHeader);
  }

  getStudents():Observable<Student[]>{
    console.log(httpHeader.headers.get('Authorization'));
    return this.http.get<Student[]>(this.api + 'api/students', httpHeader);
  }
}
