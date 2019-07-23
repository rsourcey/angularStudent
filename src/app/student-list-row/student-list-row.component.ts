import { Router } from '@angular/router';
import { Student } from './../shared/student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-list-row',
  templateUrl: './student-list-row.component.html',
  styleUrls: ['./student-list-row.component.css']
})
export class StudentListRowComponent implements OnInit {
  @Input() student:Student;

  constructor(private router:Router) { }

  ngOnInit() {
    console.log('good morning ' + this.student);
  }

  post(student:Student){
    //  this.router.navigateByUrl(`enrollment?id=${student.id}&request=${"delete"}`);
    this.router.navigate(['enrollment',{id:student.id,request:'post'}]);

  }

  delete(student:Student){
    //  this.router.navigateByUrl(`enrollment?id=${student.id}&request=${"delete"}`);
    this.router.navigate(['enrollment-delete',{id:student.id,request:'delete'}]);

  }

  view(student:Student){
    this.router.navigate(['student-view',{id:student.id}]);
  }
}
