import { Component } from '@angular/core';

@Component({
  selector: 'app-userstask',
  templateUrl: './userstask.component.html',
  styleUrls: ['./userstask.component.css']
})
export class UserstaskComponent {
  userName = '';
  
  resetUserName() {
    this.userName = "";
    return this.userName;
  }
}
