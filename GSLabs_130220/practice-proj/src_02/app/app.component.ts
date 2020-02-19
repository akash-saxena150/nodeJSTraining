import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Andromeda', content: "I am a server"}];
  newServerName = '';
  newServerContent = '';

  onServerAdded(event) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent
    });
  }

  onBlueprintAdded(event) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent
    });
  }
}
