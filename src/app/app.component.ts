import { Component } from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularStudent';

  constructor() {
    setTheme('bs3');
  }
  ngOnInit(){

  }
}
