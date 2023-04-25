import { Component } from '@angular/core';
import {UtilityService} from '../shared/utility.service';

export class User{
  constructor(public name:any,
    public username:any,
    public email:any,
    public address:any,public phone:any,public company:any){

  }
}

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.scss']
})


export class UserinformationComponent {
  data:User[]=[];
  constructor(private configService: UtilityService){};

  ngOnInit(){
    this.showConfig();
    }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data) =>{
          this.data = data
      });
  }
}
