import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {

   }
  id = parseInt(this.route.snapshot.params.id);
  ngOnInit() {
    console.log(this.route.snapshot.params)
   console.log("Id",this.id) 
    this.server = this.serversService.getServer(this.id+1);
  }
  editServer(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
