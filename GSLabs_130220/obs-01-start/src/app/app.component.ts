import { Component, OnInit } from '@angular/core';
import {UserService} from './user-service'
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  userActivated = false;
  constructor(private userService:UserService ) {}

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(()=>{
      this.userActivated = true;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
