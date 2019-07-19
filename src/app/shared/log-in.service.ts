import { LogInModel } from './log-in-model.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


// const headers = new HttpHeaders({
//   'Content-Type':  'application/json',
//   'Access-Control-Allow-Methods': '*',
//   'Access-Control-Allow-Origin': '*'
// });


const data = new FormData();

export class LogInService {
  api:string = "https://ys-training-api.herokuapp.com/api/authenticate";
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
   
  });
  constructor(private http:HttpClient) { }
  
  logIn(logInModel:LogInModel){
    var username = logInModel.username;
    var password = logInModel.password;
    data.append("username", username);
    data.append("password", password);
    let headers_obj = {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      Authorization:"Basic "+btoa(username+":"+password)
    }
    console.log(logInModel);
     return this.http.post<any>(this.api, logInModel, {headers:headers_obj});

    // return this.http.post<any>(this.api + 'api/authenticate',logInModel)
    // .pipe(map(student =>{
    //   console.log(student);
    //   if(student){
    //     student.authData = window.btoa(username+':'+password);
    //     localStorage.setItem('currentUser', JSON.stringify(student));
    //   }
    //   return student;
    // }));
  }
}
