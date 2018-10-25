import { Component, EventEmitter, Input, Output } from '@angular/core';
import {loggingService} from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(){
    console.log(loggingService);
  }
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    let logging = new loggingService();
    console.log("Logging service initiated ...");
    logging.logStatus(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
