import { Component, EventEmitter } from '@angular/core';
import {AccountsService} from '../accounts.service';
import {LoggingService} from '../logging.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private accountService: AccountsService, private loggingService: LoggingService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded({name: accountName, status: accountStatus})
    this.loggingService.logStatus(accountStatus);
  }
}
