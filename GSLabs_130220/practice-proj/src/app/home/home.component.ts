import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LoggingService} from '../logger-service';
import {ServersComponent} from '../servers/servers.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() onRouteChange = new EventEmitter<{route: number}>();
  constructor() { 
  }

  ngOnInit(): void {
    
  }
  changeRoute(route){
    this.onRouteChange.emit({route: route})
  }
}
