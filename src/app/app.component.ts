import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'userinformation';
  today = new Date();
  constructor(private router : Router){};

  goToPage(pagename:string):void{
    this.router.navigate([`${pagename}`])
  }



}
