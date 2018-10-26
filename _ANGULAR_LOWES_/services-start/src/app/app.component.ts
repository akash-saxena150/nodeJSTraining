import { Component } from '@angular/core';
import {accountsService} from './accounts.service';
//import {loggingService} from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountsService: accountsService){
  }
  accounts = this.accountsService.accounts;
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountsService.onAccountAdded(newAccount.name, newAccount.status);
  //   this.logging.logStatus(newAccount.status);

  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accountsService.onStatusChanged(updateInfo.id, updateInfo.newStatus);
  //   this.logging.logStatus(updateInfo.newStatus);
  // }
}
