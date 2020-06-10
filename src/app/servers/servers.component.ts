import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = '';
  serverWasCreated=false
  serverName = 'TestServer';
  servers=['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! The name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverWasCreated=true;
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  ngOnInit(): void {
  }

}
