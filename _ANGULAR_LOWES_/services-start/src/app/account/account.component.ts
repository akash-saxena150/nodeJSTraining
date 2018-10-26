import { Component,  Input } from '@angular/core';
//import {loggingService} from '../logging.service';
import {accountsService} from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private accountsService: accountsService){
    
  }
  onSetTo(status: string) {
    this.accountsService.onStatusChanged(this.id, status);
    //this.logging.logStatus(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
