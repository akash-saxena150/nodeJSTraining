import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverElements = [];
  newServerName = '';
  newServerContent = '';
  @Output('serverAdded') addServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() addBlueprint = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('ServerContent') srvContent: ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverName) {
    // console.log(this.srvContent.nativeElement.value)
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log("Adding server ...")
    this.addServer.emit({serverName: serverName.value, serverContent: this.srvContent.nativeElement.value})
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.addBlueprint.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }
}
