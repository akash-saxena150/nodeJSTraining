import { Component} from '@angular/core';//Output and event emitter removed
//import {loggingService} from '../logging.service';
import {accountsService} from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private accountsService: accountsService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded(accountName, accountStatus)
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
