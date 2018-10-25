import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'test server01', content: 'This is a test server'},
    {type: 'blueprint', name: 'Blueprint 01', content: 'This is a blueprint'}
  ];
  onDeleteServer(){
    this.serverElements.splice(0,1);
  }

  onServerAdded(serverData:{serverName: string, serverContent: string}) {
    console.log("Event gathered")
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName: string, serverContent: string}) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
