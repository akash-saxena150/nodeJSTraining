import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverCreatedStatus = "Waiting to create a server";
  signUpStatus = false;
  serverName = "Waiting for name";
  serverList=[
    {name: 'Server test'},
    {name: 'Server Andromeda'}
  ]
  constructor() { }

  ngOnInit() {
  }
  onInpUpdate(event: Event){
    console.log("event",<HTMLInputElement>event.target);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  toggleSignUpStatus(){
    this.signUpStatus = !this.signUpStatus
  }
  deleteServer(indx){
    console.log(indx);
    this.serverList.splice(indx, 1);
  }
  createServer(e){
    this.serverCreatedStatus = "Server created";
    this.serverList.push({name: this.serverName});
  }

}
