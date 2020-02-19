import { Component, OnInit } from '@angular/core';
import {ServerListService} from '../serverlist-service';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversData=[];
  highlightedServer = 0;
  constructor(private serverListService: ServerListService) { 
    console.log(this.serverListService.serversData);
    this.serverListService.emitHighlightedServer.subscribe((val)=>{
      this.highlightedServer = val;
    })
  }
  ngOnInit(): void {
    this.serversData = this.serverListService.serversData;
    this.highlightedServer = this.serverListService.highlightedServer;
  }
  deleteServer(indx){
    this.serverListService.deleteServer(indx);
  }

}
