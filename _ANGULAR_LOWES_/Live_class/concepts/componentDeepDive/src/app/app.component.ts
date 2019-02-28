import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Andromeda', content: 'Andromeda server'},
    {type: 'blueprint', name: 'My blueprint', content: 'First blueprint'}
  ];
  removeEl(i){
    console.log("removing");
    this.serverElements.splice(i, 1);
  }
  onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  };
  constructor(){}
  
}
