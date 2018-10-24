import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverCreatedStatus = "Waiting to create a server";
  serverName = "Waiting for name";
  constructor() { }

  ngOnInit() {
  }
  onInpUpdate(event: Event){
    console.log("event",<HTMLInputElement>event.target);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  createServer(e){
    console.log(e);
    this.serverName = "Andromeda"
    this.serverCreatedStatus = "Server created";
  }

}
