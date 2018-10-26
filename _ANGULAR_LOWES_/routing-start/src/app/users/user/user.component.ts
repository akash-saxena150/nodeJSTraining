import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string} = {id: 0, name: ''};

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.user.id = parseInt(this.route.snapshot.params.id);
    this.user.name = this.route.snapshot.params.name;
    this.route.params.subscribe(
      (params: Params)=>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )    
  }

}
