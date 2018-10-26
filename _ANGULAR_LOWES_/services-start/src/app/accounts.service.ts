import {Injectable} from '@angular/core'
import {loggingService} from './logging.service';

@Injectable()

export class accountsService{
    constructor(private loggingService: loggingService){}
    accounts = [
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
    onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatus(status);
    }

    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatus(newStatus);
    }
}