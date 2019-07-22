import { LogInModel } from './../shared/log-in-model.model';
import { LogInService } from './../shared/log-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {
  logInModel:LogInModel;
  constructor(private logInService:LogInService) { }

  ngOnInit() {
  }
  onSubmit(formData):void{
    this.logInService.logIn(formData).subscribe(model => {
      // this.logInModel = model;
      // console.log(this.logInModel);
    });
   
    alert('Your password is : ' + formData.password);
  }
}
