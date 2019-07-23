import { Router } from '@angular/router';
import { LogInModel } from './../shared/log-in-model.model';
import { LogInService } from './../shared/log-in.service';
import { Component, OnInit } from '@angular/core';


declare var particlesJS: any
@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {
  logInModel:LogInModel;
  constructor(private logInService:LogInService, private router:Router) { }

  ngOnInit() {

  }
  onSubmit(formData):void{
    this.logInService.logIn(formData).subscribe(data =>
      {
      alert('login success!');
      this.router.navigate(['student-list']);
    }
      ,
    err => alert('login fail!')
    );
  }

  register(){
    this.router.navigate(['register']);
  }
}
