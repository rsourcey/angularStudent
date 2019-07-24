import { Course } from './course.model';
export class Student {
    constructor() {
        // this.courses = [{id: "1", name: "aa" },{id: "2", name: "bbb" }]
    }
    id: string;
    email:string;
    gender:string;
    firstname:string;
    lastname:string;
    password:string;
    enrollments: Array<Course>;
    // courses:{id:number, name:string}[] = [{"id": 1,"name":"aaaa"},{"id": 2,"name":"bbb"}];

    /**
     *
     */
   
}
