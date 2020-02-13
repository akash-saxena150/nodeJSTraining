import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter <{serverName: string, serverContent: string}>()
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInp') serverContentInp: ElementRef;
  constructor() { }
  onAddServer(serverName){
    console.log(this.serverContentInp.nativeElement.value);
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContentInp.nativeElement.value})
  }
  onAddBlueprint(serverName){
    // this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.serverContentInp.nativeElement.value})
  }
  ngOnInit() {
  }

}
