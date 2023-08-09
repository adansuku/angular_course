import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Aquí, utiliza 'CommonModule'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No was server created';
  serverName: string = "Testserver";
  serverCreated = false;
  
  constructor() {
    setTimeout(() => {
    this.allowNewServer = true}, 2000)
  }
  ngOnInit() {
    
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  
  onUpdateServerName(event :any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
  
  // onServerCreated() {
  //   return this.serverCreated;
  // }
}
