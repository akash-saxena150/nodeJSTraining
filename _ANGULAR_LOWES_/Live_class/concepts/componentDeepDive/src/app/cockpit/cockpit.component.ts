import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('srvAdded') serverAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverName') serverName:ElementRef
  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log(this.serverName.nativeElement.value);
    this.serverAdded.emit({serverName: this.serverName.nativeElement.value, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  constructor() { }

  ngOnInit() {
  }

}
