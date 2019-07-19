import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { Student } from './student.model';
import {HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
export class StudentService {
  api:string = "https://ys-training-api.herokuapp.com/";
  constructor(private http:HttpClient) { }
  
  postStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.api + 'api/students', student, httpOptions);

  }
}
