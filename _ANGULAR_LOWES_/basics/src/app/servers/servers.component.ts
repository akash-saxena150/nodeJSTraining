import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverCreatedStatus = "Waiting to create a server"
  constructor() { }

  ngOnInit() {
  }
  createServer(e){
    console.log(e);
    this.serverCreatedStatus = "Server created";
  }

}
