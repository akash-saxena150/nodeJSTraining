import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversData = [
    {name: 'Andromeda', statue: true},
    {name: 'Milky way', statue: false},
    {name: 'Star wars', statue: true}
  ];
  constructor() { 

  }
  ngOnInit(): void {
  }
  deleteServer(indx){
    this.serversData.splice(indx, 1);
  }

}
