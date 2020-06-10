import { Component } from '@angular/core';

@Component({ // setup meta data - important information
    selector: 'app-server',// that is the html component which we get
    templateUrl: './server.component.html', // to get the html
    styles:[`
    .online{
        color: white
    }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';


    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor(){
        return this.serverStatus == 'online' ? 'green' : 'red';
    }

    getServerStatus() {
        return this.serverStatus;
    }
}