import { Component, EventEmitter, Output } from '@angular/core';
import {loggingService} from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[loggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private logging: loggingService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    //console.log('A server status changed, new status: ' + accountStatus);
    this.logging.logStatus(accountStatus);
  }
}
