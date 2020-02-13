import { Component, OnInit } from '@angular/core';
import {ServerService} from './server.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServerService]
})
export class AppComponent implements OnInit {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService){}
  onStoreServer(){
    this.serverService.createServers(this.servers)
      .subscribe(
        (response) => {console.log(response)},
        (error) => console.log(error)
      );
  }
  onGetServer() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  ngOnInit(){
    this.onGetServer();
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
