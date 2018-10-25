import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @ViewChild('serverName') serverName:ElementRef
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log(this.serverName.nativeElement.value);
    this.serverCreated.emit({serverName: this.serverName.nativeElement.value, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

}
