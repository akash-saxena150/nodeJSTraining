import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class AccountsService{
    accounts:any[] = [
        {
        name: 'Master Account',
        status: 'active'
        },
        {
        name: 'Testaccount',
        status: 'inactive'
        },
        {
        name: 'Hidden Account',
        status: 'unknown'
        }
    ];
    constructor(private loggingService: LoggingService){}
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    this.loggingService.logStatus(newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatus(updateInfo.newStatus);
  }
}