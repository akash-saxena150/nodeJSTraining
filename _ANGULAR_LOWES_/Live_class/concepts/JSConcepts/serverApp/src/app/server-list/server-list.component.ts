import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  serverMessage="Waiting to add the server";
  serverName = "";
  serverList = ["Andromeda", "Galaxy", "Neptune"];
  constructor() { }
  // onInpUpdate(e){
  //   this.serverName = e.target.value;
  // }
  addServer(){
    this.serverMessage = `Server added. Server name: ${this.serverName}`;
    this.serverList.push(this.serverName);
    this.serverName = "";
    
  }
  deleteServer(i){
    this.serverList.splice(i,1);
  }
  ngOnInit() {
  }

}
